'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import LikesPage from '@/pages/LikesPage';
import { mockNotifications } from '@/mocks/data';
import { TSocialEvent } from '@/mocks/types';

// Серверная страница для отображения лайков конкретного события
export default function Page() {
  const params = useParams();
  
  // Проверяем, что params не null и извлекаем eventId
  if (!params) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>Ошибка</h2>
        <p>Не удалось загрузить параметры страницы</p>
      </div>
    );
  }
  
  const eventId = params.eventId as string;
  
  // Состояние загрузки
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<TSocialEvent | null>(null);

  // Эффект для загрузки данных с искусственной задержкой
  useEffect(() => {
    // Имитируем загрузку данных с задержкой 800 мс
    const timer = setTimeout(() => {
      // Находим событие по ID в моковых данных
      const foundEvent = mockNotifications.results.find((e) => e.id === eventId);
      setEvent(foundEvent || null); // Преобразуем undefined в null
      setIsLoading(false);
    }, 800);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, [eventId]);

  // Если событие не найдено или это не событие типа 'like'
  if (!isLoading && (!event || event.type !== 'like')) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>Событие не найдено</h2>
        <p>Лайки для этого события недоступны</p>
      </div>
    );
  }

  // Получаем список пользователей для события типа 'like'
  const users = isLoading || !event || event.type !== 'like' 
    ? [] 
    : event.all_users || event.users_preview || [];

  // Отображаем страницу с лайками, используя полный список пользователей
  return (
    <LikesPage 
      users={users}
      postImage={event?.image}
      isLoading={isLoading}
    />
  );
}

