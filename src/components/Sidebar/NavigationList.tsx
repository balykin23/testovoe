import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { NavigationItem } from './NavigationItem';
import { cn } from '@/utils';
import { ROUTES } from '@/constants';
import {
  FeedIcon,
  MessageIcon,
  NotificationsIcon,
  SubscribersIcon,
  ShopIcon,
  MyBalanceIcon,
  MarketingIcon,
  WorkScheduleIcon,
  ProfileIcon,
} from '@/components/icons/';
import styles from './Sidebar.module.css';

type TNavItem = {
  href: string;
  label: string;
  ariaLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const navItems: TNavItem[] = [
  { href: ROUTES.HOME, label: 'Лента', ariaLabel: 'Перейти на страницу контактов', Icon: FeedIcon },
  { href: ROUTES.MESSAGES, label: 'Сообщения', ariaLabel: 'Перейти на страницу сообщения', Icon: MessageIcon },
  { href: ROUTES.NOTIFICATIONS, label: 'Уведомления', ariaLabel: 'Перейти на страницу уведомления', Icon: NotificationsIcon },
  { href: ROUTES.SUBSCRIBERS, label: 'Подписчики', ariaLabel: 'Перейти на страницу подписчики', Icon: SubscribersIcon },
  { href: ROUTES.SHOP, label: 'Магазин', ariaLabel: 'Перейти на страницу магазина', Icon: ShopIcon },
  { href: ROUTES.BALANCE, label: 'Мой баланс', ariaLabel: 'Перейти на страницу моего баланса', Icon: MyBalanceIcon },
  { href: ROUTES.MARKETING, label: 'Маркетинг', ariaLabel: 'Перейти на страницу маркетинга', Icon: MarketingIcon },
  { href: ROUTES.SCHEDULE, label: 'График работ', ariaLabel: 'Перейти на страницу графика работ', Icon: WorkScheduleIcon },
  { href: ROUTES.PROFILE, label: 'Профиль', ariaLabel: 'Перейти на страницу профиля', Icon: ProfileIcon },
];

export const NavigationList: React.FC = () => {
  const pathname = usePathname();

  const navItemsWithClasses = useMemo(
    () =>
      navItems.map((item) => {
        const isActive = pathname === item.href;
        return {
          ...item,
          isActive,
          linkClassName: cn(styles.navLink, isActive && styles.active),
        };
      }),
    [pathname]
  );

  return (
    <nav>
      <ul className={styles.nav} role="list">
        {navItemsWithClasses.map((item) => (
          <NavigationItem
            key={item.href}
            href={item.href}
            label={item.label}
            ariaLabel={item.ariaLabel}
            isActive={item.isActive}
            linkClassName={item.linkClassName}
            Icon={item.Icon}
          />
        ))}
      </ul>
    </nav>
  );
};

