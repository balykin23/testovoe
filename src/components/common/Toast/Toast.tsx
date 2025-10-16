'use client'

import { useEffect } from 'react';
import { cn } from '@/utils';
import { DURATIONS } from '@/constants';
import styles from './Toast.module.css';

export type TToastType = 'success' | 'error' | 'info' | 'warning';

export interface IToastProps {
  id: string;
  message: string;
  type?: TToastType;
  duration?: number;
  onClose: (id: string) => void;
}

// Компонент одного toast-уведомления
export const Toast: React.FC<IToastProps> = ({
  id,
  message,
  type = 'info',
  duration = DURATIONS.TOAST_DEFAULT,
  onClose,
}) => {
  // Автоматически закрываем toast через указанное время
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  // Обработчик ручного закрытия
  const handleClose = () => {
    onClose(id);
  };

  // Обработчик клавиатуры для accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClose();
    }
  };

  // Формируем класс в зависимости от типа
  const toastClassName = cn(styles.toast, styles[type]);

  return (
    <div
      className={toastClassName}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className={styles.content}>
        <div className={styles.icon}>
          {type === 'success' && '✓'}
          {type === 'error' && '✕'}
          {type === 'info' && 'ℹ'}
          {type === 'warning' && '⚠'}
        </div>

        <p className={styles.message}>{message}</p>
      </div>

      <button
        type="button"
        className={styles.closeBtn}
        onClick={handleClose}
        onKeyDown={handleKeyDown}
        aria-label="Закрыть уведомление"
      >
        ✕
      </button>
    </div>
  );
};

