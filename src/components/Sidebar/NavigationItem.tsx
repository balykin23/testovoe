import Link from 'next/link';
import styles from './Sidebar.module.css';

interface INavigationItemProps {
  href: string;
  label: string;
  ariaLabel: string;
  isActive: boolean;
  linkClassName: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  href,
  label,
  ariaLabel,
  isActive,
  linkClassName,
  Icon,
}) => {
  return (
    <li className={styles.navItem}>
      <Link
        href={href}
        className={linkClassName}
        aria-label={ariaLabel}
        aria-current={isActive ? 'page' : undefined}
        prefetch={false}
      >
        <Icon className={styles.navIcon} />
        <span>{label}</span>
      </Link>
    </li>
  );
};

