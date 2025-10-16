'use client'

import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './NotificationTabs.module.css';
import { NotificationCard } from '../NotificationCard';
import { TSocialEvent } from '@/mocks/types';
import { cn } from '@/utils';
import { NOTIFICATION_TAB_CONFIG, EVENT_CATEGORIES, NOTIFICATION_TABS } from '@/constants';

type TTabType = typeof NOTIFICATION_TABS[keyof typeof NOTIFICATION_TABS];

type TNotificationTabsProps = {
  notifications: TSocialEvent[];
};

// Компонент для отображения пустого состояния
const EmptyState = ({ id, title }: { id: string; title: string }) => {
  return (
    <section className={styles.placeholder} aria-labelledby={id}>
      <div className={styles.emptyIcon}>
        <Image
          src="/icons/girlIcon.svg"
          alt="Пустое состояние"
          width={168}
          height={184}
          priority
        />
      </div>

      <h3 id={id} className={styles.emptyTitle}>
        Пока нет информации
      </h3>

      <p className={styles.emptyDescription}>
        Репосты, отметки «Нравится»<br/>
        и многое другое — здесь вы найдете все взаимодействия с контентом.
      </p>
    </section>
  );
};

export default function NotificationTabs({ notifications }: TNotificationTabsProps) {
  const [activeTab, setActiveTab] = useState<TTabType>(NOTIFICATION_TABS.ALL);

  // Фильтрация событий в зависимости от активного таба
  const filteredEvents = useMemo(() => {
    // Если выбран таб "Все", показываем все события
    if (activeTab === NOTIFICATION_TABS.ALL) {
      return notifications;
    }

    // Получаем типы событий для выбранной категории
    const categoryKey = activeTab.toUpperCase() as keyof typeof EVENT_CATEGORIES;
    const eventTypes = EVENT_CATEGORIES[categoryKey] as readonly string[];

    // Фильтруем события по типам
    return notifications.filter(event => (eventTypes as readonly string[]).includes(event.type));
  }, [activeTab, notifications]);

  const renderTabContent = () => {
    // Если нет событий, показываем EmptyState
    if (filteredEvents.length === 0) {
      return <EmptyState id={`${activeTab}-notifications`} title={`Уведомления: ${activeTab}`} />;
    }

    // Иначе показываем список событий
    return (
      <div className={styles.eventsList}>
        {filteredEvents.map(event => (
          <NotificationCard key={event.id} event={event} />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.container} aria-label="Фильтр уведомлений">
      <nav className={styles.tabsNav} role="tablist" aria-label="Типы уведомлений">
        {NOTIFICATION_TAB_CONFIG.map((tab) => {
          const isActive = activeTab === tab.id;
          const buttonClass = cn(
            styles.tabButton,
            isActive && styles.active
          );

          return (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              className={buttonClass}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              aria-label={tab.ariaLabel}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
      <div
        className={styles.tabContent}
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
      >
        {renderTabContent()}
      </div>
    </section>
  );
}

