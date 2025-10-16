import { cn } from '@/utils';
import styles from './NotificationCard.module.css';

interface IFollowButtonProps {
  isFollowing: boolean;
  onClick: (e: React.MouseEvent) => void;
}

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

