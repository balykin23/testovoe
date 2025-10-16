import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ConfirmModal.module.css';

export type TConfirmModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmModal: React.FC<TConfirmModalProps> = ({
  isOpen,
  title,
  message,
  cancelLabel = 'Отменить',
  confirmLabel = 'Удалить',
  onCancel,
  onConfirm,
}) => {
  // Состояние для хранения DOM-элемента, в который будет рендериться портал
  const [mounted, setMounted] = useState(false);

  // Устанавливаем mounted в true после монтирования компонента (только на клиенте)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Блокируем скролл страницы при открытой модалке
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Обработка нажатия Escape для закрытия
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onCancel]);

  // Не рендерим ничего, если модалка закрыта или компонент еще не смонтирован
  if (!isOpen || !mounted) return null;

  // Обработчик клика по overlay (закрытие при клике вне модалки)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  // Обработчик нажатия Enter/Space для кнопок
  const handleCancelKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onCancel();
    }
  };

  const handleConfirmKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onConfirm();
    }
  };

  // Контент модалки
  const modalContent = (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onCancel}
          aria-label="Закрыть"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h3 id="modal-title" className={styles.title}>
          {title}
        </h3>

        <p id="modal-description" className={styles.message}>
          {message}
        </p>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onCancel}
            onKeyDown={handleCancelKeyDown}
            aria-label={cancelLabel}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={styles.confirmBtn}
            onClick={onConfirm}
            onKeyDown={handleConfirmKeyDown}
            aria-label={confirmLabel}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );

  // Рендерим модалку через Portal в body
  return createPortal(modalContent, document.body);
};

