import Link from 'next/link';
import { Avatar } from '@/components/ui/Avatar';
import { ISocialUser } from '@/mocks/types';
import styles from './NotificationCard.module.css';

// Интерфейс пропсов для компонента превью лайков
interface ILikePreviewProps {
  eventId: string;
  usersPreview: ISocialUser[];
  otherCount?: number;
}

/**
 * Компонент для отображения превью пользователей, которые поставили лайк
 * Показывает первых 3 пользователя и количество остальных
 */
export const LikePreview: React.FC<ILikePreviewProps> = ({
  eventId,
  usersPreview,
  otherCount,
}) => {
  // Ранний выход, если нет пользователей для отображения
  if (!usersPreview || usersPreview.length === 0) {
    return null;
  }

  // Формируем описание для aria-label
  const ariaLabel = `Посмотреть ${usersPreview.length} ${
    otherCount ? `+ ${otherCount}` : ''
  } лайков`;

  return (
    <Link
      href={`/likes/${eventId}`}
      className={styles.likePreview}
      aria-label={ariaLabel}
    >
      <div className={styles.avatarStack}>
        {usersPreview.slice(0, 3).map((likeUser, index) => (
          <Avatar
            key={likeUser.id}
            src={likeUser.avatar}
            alt={likeUser.name}
            size="sm"
            className={styles.stackedAvatar}
            style={{ zIndex: 3 - index }} // Z-индекс для наложения аватаров
          />
        ))}
      </div>
      {otherCount !== undefined && otherCount > 0 && (
        <span className={styles.otherCount}>+{otherCount}</span>
      )}
    </Link>
  );
};

