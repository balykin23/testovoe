'use client'

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast, TToastType } from '@/components/common/Toast/Toast';
import { generateId } from '@/utils';
import { DURATIONS } from '@/constants';
import styles from '@/components/common/Toast/Toast.module.css';

// Интерфейс для toast
interface IToastItem {
  id: string;
  message: string;
  type: TToastType;
  duration?: number;
}

// Интерфейс контекста
interface IToastContextType {
  showToast: (message: string, type?: TToastType, duration?: number) => void;
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
  showWarning: (message: string, duration?: number) => void;
}

const ToastContext = createContext<IToastContextType | undefined>(undefined);

// Провайдер для toast-уведомлений
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<IToastItem[]>([]);

  // Основная функция для показа toast
  const showToast = useCallback((message: string, type: TToastType = 'info', duration = DURATIONS.TOAST_DEFAULT) => {
    const id = generateId('toast');
    const newToast: IToastItem = { id, message, type, duration };

    setToasts(prev => [...prev, newToast]);
  }, []);

  // Удобные хелперы для разных типов
  const showSuccess = useCallback((message: string, duration?: number) => {
    showToast(message, 'success', duration);
  }, [showToast]);

  const showError = useCallback((message: string, duration?: number) => {
    showToast(message, 'error', duration);
  }, [showToast]);

  const showInfo = useCallback((message: string, duration?: number) => {
    showToast(message, 'info', duration);
  }, [showToast]);

  const showWarning = useCallback((message: string, duration?: number) => {
    showToast(message, 'warning', duration);
  }, [showToast]);

  // Закрытие toast
  const handleCloseToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        showSuccess,
        showError,
        showInfo,
        showWarning,
      }}
    >
      {children}

      <div className={styles.toastContainer}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={handleCloseToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Хук для использования toast в компонентах
export const useToast = (): IToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast должен использоваться внутри ToastProvider');
  }

  return context;
};

