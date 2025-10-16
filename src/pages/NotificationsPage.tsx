'use client'

import { useState, useEffect } from 'react';
import { NotificationTabs } from '@/components/NotificationTabs';
import { ConfirmModal } from '@/components/common';
import { NotificationCardSkeleton } from '@/components/skeletons';
import styles from '@/styles/pages/Page.module.css';
import { mockNotifications } from '@/mocks/data';
import { TSocialEvent } from '@/mocks/types';
import { DURATIONS } from '@/constants';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<TSocialEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Эффект для загрузки данных с искусственной задержкой
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(mockNotifications.results);
      setIsLoading(false);
    }, DURATIONS.PAGE_LOADING);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setNotifications([]);
    setIsModalOpen(false);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Уведомления</h2>
        <button
          type="button"
          className={styles.editBtn}
          aria-label="Еще"
          onClick={handleOpenModal}
          disabled={isLoading}
        >
          <img
            src="/icons/editIcon.svg"
            alt=""
            width={22}
            height={22}
          />
        </button>
      </header>

      {isLoading ? (
        <div className={styles.notificationsList}>
          {Array.from({ length: 5 }).map((_, index) => (
            <NotificationCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        /* Передаем уведомления в NotificationTabs после загрузки */
        <NotificationTabs notifications={notifications} />
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        title="Удалить все оповещения"
        message="Вы уверены?"
        cancelLabel="Отменить"
        confirmLabel="Удалить"
        onCancel={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
}

