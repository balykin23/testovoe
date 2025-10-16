import React from 'react';
import styles from './SidebarSkeleton.module.css';

export const UserBarSkeleton: React.FC = () => {
  return (
    <div className={styles.userBarSkeleton} aria-busy="true" aria-label="Загрузка профиля">
      <div className={styles.userLinkSkeleton}>
        <div className={styles.avatarSkeleton} />
        <div className={styles.userNameSkeleton} />
      </div>
      <div className={styles.settingsButtonSkeleton} />
    </div>
  );
};

export const SidebarSkeleton: React.FC = () => {
  return (
    <div className={styles.sidebar} aria-busy="true" aria-label="Загрузка навигации">
      <div className={styles.content}>
        <UserBarSkeleton />

        <nav>
          <ul className={styles.navSkeleton}>
            {Array.from({ length: 9 }).map((_, index) => (
              <li key={index} className={styles.navItemSkeleton}>
                <div className={styles.navIconSkeleton} />
                <div className={styles.navTextSkeleton} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

