import Image from 'next/image';
import { TSocialEvent } from '@/mocks/types';
import { EVENT_TYPES } from '@/constants';
import { LikePreview } from './LikePreview';
import { SubscriptionInfo } from './SubscriptionInfo';
import styles from './NotificationCard.module.css';

// Интерфейс пропсов для содержимого события
interface IEventContentProps {
  event: TSocialEvent;
  onUserClick: (e: React.MouseEvent) => void;
}

/**
 * Компонент для отображения содержимого уведомления
 * Показывает текст события, контекст, превью и специфичную информацию
 */
export const EventContent: React.FC<IEventContentProps> = ({
  event,
  onUserClick,
}) => {
  const { user, text, type, image } = event;

  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.text}>
            <span
              className={styles.userName}
              onClick={onUserClick}
              role="button"
              tabIndex={0}
              aria-label={`Перейти к профилю ${user.name}`}
            >
              {user.name}
            </span>
            {text && <> {text}</>}
          </p>
        </div>

        {type === 'mention' && event.context && (
          <p className={styles.context}>{event.context}</p>
        )}

        {type === 'like' && event.users_preview && event.users_preview.length > 0 && (
          <LikePreview
            eventId={event.id}
            usersPreview={event.users_preview}
            otherCount={event.other_count}
          />
        )}

        {type === EVENT_TYPES.PAID_SUBSCRIPTION && (
          <SubscriptionInfo
            plan={event.plan}
            amount={event.amount}
            currency={event.currency}
          />
        )}
      </div>

      {image && type !== EVENT_TYPES.FOLLOW && (
        <div className={styles.imagePreview}>
          <Image
            src={image}
            alt="Превью контента"
            width={48}
            height={48}
            className={styles.previewImage}
          />
        </div>
      )}
    </>
  );
};

