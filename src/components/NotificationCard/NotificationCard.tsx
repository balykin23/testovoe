'use client'

import { useState } from 'react';
import { TSocialEvent } from '@/mocks/types';
import { useToast } from '@/contexts/ToastContext';
import { Avatar } from '@/components/ui/Avatar';
import { formatTimeAgo, cn } from '@/utils';
import { EVENT_TYPES } from '@/constants';
import { EventContent } from './EventContent';
import { FollowButton } from './FollowButton';
import styles from './NotificationCard.module.css';

interface INotificationCardProps {
  event: TSocialEvent;
}

export const NotificationCard: React.FC<INotificationCardProps> = ({ event }) => {
  const { user, created } = event;
  const { showSuccess, showInfo, showWarning } = useToast();

  const [isFollowing, setIsFollowing] = useState<boolean>(
    event.type === 'follow' ? event.is_following ?? false : false
  );

  const [isRead, setIsRead] = useState(false);

  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    showInfo(`Переход на профиль пользователя: ${user.name} (${user.username})`);
  };

  const handleAvatarClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    showInfo(`Переход на профиль пользователя: ${user.name} (${user.username})`);
  };

  const handleCardClick = () => {
    switch (event.type) {
      case 'comment':
        showInfo(`Переход к посту с комментарием (ID: ${event.target_id})`);
        break;
      case 'like':
        showInfo(`Переход к посту с лайками (ID: ${event.target_id})`);
        break;
      case 'mention':
        showInfo(`Переход к посту с упоминанием (ID: ${event.target_id})`);
        break;
      case 'new_post':
        showInfo(`Переход к новому посту (ID: ${event.target_id})`);
        break;
      case 'follow':
        showInfo(`Переход на профиль подписчика: ${user.name}`);
        break;
      case 'paid_subscription':
        showInfo('Переход к странице управления подписками');
        break;
    }

    if (!isRead) {
      setIsRead(true);
    }
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    showWarning(`Уведомление от ${user.name} удалено`);
  };

  const handleDeleteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      showWarning(`Уведомление от ${user.name} удалено`);
    }
  };

  const handleFollowToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing((prev) => !prev);
  };

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

        <button
          type="button"
          className={styles.editBtn}
          aria-label="Удалить уведомление"
          onClick={handleDeleteClick}
          onKeyDown={handleDeleteKeyDown}
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
      </div>
      <div className={styles.cardDate}>
        <time className={styles.time} dateTime={created}>
          {formatTimeAgo(created)}
        </time>
      </div>
    </article>
  );
};

