import { cn } from '@/utils';
import styles from './Sidebar.module.css';

interface IBurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const BurgerButton: React.FC<IBurgerButtonProps> = ({
  isOpen,
  onClick,
  onKeyDown,
}) => {
  return (
    <button
      type="button"
      className={styles.burgerButton}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      aria-controls="sidebar-nav"
    >
      <span className={cn(styles.burgerLine, isOpen && styles.burgerLineOpen)} />
      <span className={cn(styles.burgerLine, isOpen && styles.burgerLineOpen)} />
      <span className={cn(styles.burgerLine, isOpen && styles.burgerLineOpen)} />
    </button>
  );
};

