import React from 'react';
import styles from './NotificationCardSkeleton.module.css';

export const NotificationCardSkeleton: React.FC = () => {
  return (
    <div className={styles.card} aria-busy="true" aria-label="Загрузка уведомления">
      <div className={styles.cardContent}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarSkeleton} />
        </div>

        <div className={styles.content}>
          <div className={styles.textSkeleton}>
            <div className={styles.textLine} />
          </div>
          <div className={styles.textSkeleton}>
            <div className={styles.textLineSmall} />
          </div>
        </div>

        <div className={styles.imageSkeleton} />
      </div>

      <div className={styles.cardDate}>
        <div className={styles.timeSkeleton} />
      </div>
    </div>
  );
};

