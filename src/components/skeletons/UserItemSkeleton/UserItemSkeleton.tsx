import React from 'react';
import styles from './UserItemSkeleton.module.css';

export const UserItemSkeleton: React.FC = () => {
  return (
    <div className={styles.userItem} aria-busy="true" aria-label="Загрузка пользователя">
      <div className={styles.avatarSkeleton} />

      <div className={styles.userInfo}>
        <div className={styles.nameSkeleton} />
        <div className={styles.textSkeleton} />
      </div>

      <div className={styles.postImageSkeleton} />

      <div className={styles.menuButtonSkeleton} />
    </div>
  );
};

