'use client'

import { useState } from 'react';
import { TSocialEvent } from '@/mocks/types';
import { useToast } from '@/contexts/ToastContext';
import { DropdownMenu, IDropdownMenuItem } from '@/components/common';
import { Avatar } from '@/components/ui/Avatar';
import { formatTimeAgo, cn } from '@/utils';
import { EVENT_TYPES } from '@/constants';
import { EventContent } from './EventContent';
import { FollowButton } from './FollowButton';
import styles from './NotificationCard.module.css';

// Интерфейс пропсов для карточки уведомления
interface INotificationCardProps {
  event: TSocialEvent;
}

/**
 * Основной компонент карточки уведомления
 * Отображает информацию о событии с возможностью взаимодействия
 */
export const NotificationCard: React.FC<INotificationCardProps> = ({ event }) => {
  const { user, created } = event;
  const { showSuccess, showInfo, showWarning } = useToast();

  // Состояние подписки для событий типа 'follow'
  const [isFollowing, setIsFollowing] = useState<boolean>(
    event.type === 'follow' ? event.is_following ?? false : false
  );

  // Состояние для отметки как прочитанное
  const [isRead, setIsRead] = useState(false);

  // === ДЕЙСТВИЕ 1: Клик на аватар, имя или юзернейм ===
  // Переход на профиль пользователя
  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие к карточке
    showInfo(`Переход на профиль пользователя: ${user.name} (${user.username})`);
    // Здесь будет: router.push(`/profile/${user.id}`)
  };

  // Wrapper для компонентов без event аргумента (с остановкой всплытия)
  const handleAvatarClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Дополнительная защита от всплытия
    showInfo(`Переход на профиль пользователя: ${user.name} (${user.username})`);
  };

  // === ДЕЙСТВИЕ 2: Клик на основную область карточки ===
  // Переход к связанному контенту
  const handleCardClick = () => {
    // Определяем действие в зависимости от типа события
    switch (event.type) {
      case 'comment':
        showInfo(`Переход к посту с комментарием (ID: ${event.target_id})`);
        // router.push(`/posts/${event.target_id}`)
        break;
      case 'like':
        showInfo(`Переход к посту с лайками (ID: ${event.target_id})`);
        // router.push(`/posts/${event.target_id}`)
        break;
      case 'mention':
        showInfo(`Переход к посту с упоминанием (ID: ${event.target_id})`);
        // router.push(`/posts/${event.target_id}`)
        break;
      case 'new_post':
        showInfo(`Переход к новому посту (ID: ${event.target_id})`);
        // router.push(`/posts/${event.target_id}`)
        break;
      case 'follow':
        showInfo(`Переход на профиль подписчика: ${user.name}`);
        // router.push(`/profile/${user.id}`)
        break;
      case 'paid_subscription':
        showInfo('Переход к странице управления подписками');
        // router.push('/subscriptions')
        break;
    }

    // Помечаем уведомление как прочитанное
    if (!isRead) {
      setIsRead(true);
    }
  };

  // Обработчик клавиатуры для карточки (accessibility)
  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  // === ДЕЙСТВИЕ 3: Контекстное меню (три точки) ===
  // Пункты меню
  const menuItems: IDropdownMenuItem[] = [
    {
      label: isRead ? 'Отметить как непрочитанное' : 'Отметить как прочитанное',
      icon: isRead ? '👁️' : '✓',
      onClick: () => {
        setIsRead((prev) => !prev);
        showSuccess(isRead ? 'Отмечено как непрочитанное' : 'Отмечено как прочитанное');
      },
    },
    {
      label: 'Удалить уведомление',
      icon: '🗑️',
      variant: 'danger',
      onClick: () => {
        showWarning(`Уведомление от ${user.name} удалено`);
        // Здесь будет логика удаления из списка
      },
    },
    {
      label: 'Пожаловаться',
      icon: '⚠️',
      onClick: () => {
        showInfo('Жалоба отправлена на рассмотрение');
        // Здесь будет логика отправки жалобы
      },
    },
  ];

  // Обработчик переключения подписки
  const handleFollowToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие события к карточке
    setIsFollowing((prev) => !prev);
  };

  // Формируем класс карточки используя утилиту cn
  const cardClass = cn(styles.card, isRead && styles.read);

  return (
    <article
      className={cardClass}
      aria-label={`Уведомление от ${user.name}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className={styles.cardContent}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          size="lg"
          online={user.online}
          verified={user.verified}
          clickable
          onClick={handleAvatarClick}
        />

        <EventContent event={event} onUserClick={handleUserClick} />

        {event.type === EVENT_TYPES.FOLLOW && (
          <FollowButton isFollowing={isFollowing} onClick={handleFollowToggle} />
        )}

        <DropdownMenu
          trigger={
            <button
              type="button"
              className={styles.editBtn}
              aria-label="Открыть меню"
            >
              <img
                src="/icons/editIcon.svg"
                alt=""
                className={styles.settingsIcon}
                width={22}
                height={22}
                decoding="async"
              />
            </button>
          }
          items={menuItems}
          align="right"
        />
      </div>
      <div className={styles.cardDate}>
        <time className={styles.time} dateTime={created}>
          {formatTimeAgo(created)}
        </time>
      </div>
    </article>
  );
};

