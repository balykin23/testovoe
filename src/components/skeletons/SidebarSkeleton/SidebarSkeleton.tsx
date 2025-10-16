import React from 'react';
import styles from './SidebarSkeleton.module.css';

/**
 * Компонент скелетона только для UserBar
 * Используется в мобильном header
 */
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

/**
 * Компонент скелетона для Sidebar
 * Отображается во время загрузки данных пользователя и навигации
 */
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

