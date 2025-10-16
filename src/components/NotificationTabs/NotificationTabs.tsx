'use client'

import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './NotificationTabs.module.css';
import { NotificationCard } from '../NotificationCard';
import { NotificationCardSkeleton } from '../skeletons';
import { TSocialEvent } from '@/mocks/types';
import { cn } from '@/utils';
import { NOTIFICATION_TAB_CONFIG, EVENT_CATEGORIES, NOTIFICATION_TABS } from '@/constants';

type TTabType = typeof NOTIFICATION_TABS[keyof typeof NOTIFICATION_TABS];

type TNotificationTabsProps = {
  notifications: TSocialEvent[];
  isLoading?: boolean;
};

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

export default function NotificationTabs({ notifications, isLoading = false }: TNotificationTabsProps) {
  const [activeTab, setActiveTab] = useState<TTabType>(NOTIFICATION_TABS.ALL);

  const filteredEvents = useMemo(() => {
    if (activeTab === NOTIFICATION_TABS.ALL) {
      return notifications;
    }

    const categoryKey = activeTab.toUpperCase() as keyof typeof EVENT_CATEGORIES;
    const eventTypes = EVENT_CATEGORIES[categoryKey] as readonly string[];

    return notifications.filter(event => (eventTypes as readonly string[]).includes(event.type));
  }, [activeTab, notifications]);

  const renderTabContent = () => {
    if (isLoading) {
      return (
        <div className={styles.eventsList} key={`loading-${activeTab}`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <NotificationCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      );
    }

    if (filteredEvents.length === 0) {
      return <EmptyState key={`empty-${activeTab}`} id={`${activeTab}-notifications`} title={`Уведомления: ${activeTab}`} />;
    }

    return (
      <div className={styles.eventsList} key={`content-${activeTab}`}>
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

