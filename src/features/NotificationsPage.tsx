'use client'

import { useState, useRef, useEffect } from 'react';
import { NotificationTabs } from '@/components/NotificationTabs';
import { ConfirmModal } from '@/components/common';
import { NotificationCardSkeleton } from '@/components/skeletons';
import styles from '@/styles/pages/Page.module.css';
import { useNotifications, useDeleteAllNotifications } from '@/hooks/useNotifications';
import { useToast } from '@/contexts/ToastContext';

export default function NotificationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useNotifications();

  const deleteAllMutation = useDeleteAllNotifications();
  const { showSuccess, showError } = useToast();

  const allNotifications = data?.pages.flatMap(page => page.results) ?? [];

  useEffect(() => {
    const target = observerTarget.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteAllMutation.mutate(undefined, {
      onSuccess: () => {
        showSuccess('Все уведомления успешно удалены');
        setIsModalOpen(false);
      },
      onError: () => {
        showError('Не удалось удалить уведомления');
        setIsModalOpen(false);
      },
    });
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

      <NotificationTabs 
        notifications={allNotifications} 
        isLoading={isLoading}
      />
      
      {!isLoading && hasNextPage && (
        <div ref={observerTarget} className={styles.loadingTrigger}>
          {isFetchingNextPage && (
            <div className={styles.notificationsList}>
              {Array.from({ length: 3 }).map((_, index) => (
                <NotificationCardSkeleton key={`loading-${index}`} />
              ))}
            </div>
          )}
        </div>
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

