import { SUBSCRIPTION_PLAN_LABELS } from '@/constants';
import styles from './NotificationCard.module.css';

// Тип плана подписки
type TSubscriptionPlan = 'monthly' | 'yearly';

// Тип валюты
type TCurrency = 'RUB' | 'USD' | 'EUR';

// Интерфейс пропсов для информации о подписке
interface ISubscriptionInfoProps {
  plan: TSubscriptionPlan;
  amount: number;
  currency: TCurrency;
}

/**
 * Компонент для отображения информации о платной подписке
 * Показывает план (месячный/годовой) и сумму
 */
export const SubscriptionInfo: React.FC<ISubscriptionInfoProps> = ({
  plan,
  amount,
  currency,
}) => {
  return (
    <div className={styles.subscriptionInfo}>
      <span className={styles.badge}>
        {SUBSCRIPTION_PLAN_LABELS[plan]}
      </span>
      <span className={styles.amount}>
        {amount} {currency}
      </span>
    </div>
  );
};

