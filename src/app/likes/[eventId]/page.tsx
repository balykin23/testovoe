'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import LikesPage from '@/features/LikesPage';
import { mockNotifications } from '@/mocks/data';
import { TSocialEvent } from '@/mocks/types';
import styles from '@/styles/pages/Page.module.css';

export default function Page() {
  const params = useParams();
  
  if (!params) {
    return (
      <div className={styles.errorContainer}>
        <h2>Ошибка</h2>
        <p>Не удалось загрузить параметры страницы</p>
      </div>
    );
  }
  
  const eventId = params.eventId as string;
  
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<TSocialEvent | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundEvent = mockNotifications.results.find((e) => e.id === eventId);
      setEvent(foundEvent || null);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [eventId]);

  if (!isLoading && (!event || event.type !== 'like')) {
    return (
      <div className={styles.errorContainer}>
        <h2>Событие не найдено</h2>
        <p>Лайки для этого события недоступны</p>
      </div>
    );
  }

  const users = isLoading || !event || event.type !== 'like' 
    ? [] 
    : event.all_users || event.users_preview || [];

  return (
    <LikesPage 
      users={users}
      postImage={event?.image}
      isLoading={isLoading}
    />
  );
}

