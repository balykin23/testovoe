import { SUBSCRIPTION_PLAN_LABELS } from '@/constants';
import styles from './NotificationCard.module.css';

type TSubscriptionPlan = 'monthly' | 'yearly';

type TCurrency = 'RUB' | 'USD' | 'EUR';

interface ISubscriptionInfoProps {
  plan: TSubscriptionPlan;
  amount: number;
  currency: TCurrency;
}

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

