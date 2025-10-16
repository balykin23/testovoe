import { cn } from '@/utils';
import styles from './NotificationCard.module.css';

// Интерфейс пропсов для кнопки подписки
interface IFollowButtonProps {
  isFollowing: boolean;
  onClick: (e: React.MouseEvent) => void;
}

/**
 * Компонент кнопки подписки/отписки
 * Отображается в карточках уведомлений типа 'follow'
 */
export const FollowButton: React.FC<IFollowButtonProps> = ({
  isFollowing,
  onClick,
}) => {
  const buttonClass = cn(
    styles.followBtn,
    isFollowing && styles.following
  );

  const buttonLabel = isFollowing ? 'Отписаться' : 'Подписаться';

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      aria-label={buttonLabel}
    >
      {isFollowing ? 'Подписан' : 'Подписаться'}
    </button>
  );
};

