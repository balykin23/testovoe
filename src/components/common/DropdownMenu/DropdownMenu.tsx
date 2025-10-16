'use client'

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';
import styles from './DropdownMenu.module.css';

export interface IDropdownMenuItem {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
  icon?: string;
}

interface IDropdownMenuProps {
  trigger: React.ReactNode;
  items: IDropdownMenuItem[];
  align?: 'left' | 'right';
}

export const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  trigger,
  items,
  align = 'right',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleItemClick = (item: IDropdownMenuItem) => (e: React.MouseEvent) => {
    e.stopPropagation();
    item.onClick();
    setIsOpen(false);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(prev => !prev);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleItemKeyDown = (item: IDropdownMenuItem) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      item.onClick();
      setIsOpen(false);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const menuClassName = cn(
    styles.menu,
    styles[align],
    isOpen && styles.open
  );

  return (
    <div className={styles.dropdown}>
      <div
        ref={triggerRef}
        className={styles.trigger}
        onClick={handleToggle}
        onKeyDown={handleTriggerKeyDown}
        role="button"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className={menuClassName}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, index) => {
            const itemClassName = cn(
              styles.item,
              item.variant === 'danger' && styles.danger
            );

            return (
              <div
                key={index}
                className={itemClassName}
                onClick={handleItemClick(item)}
                onKeyDown={handleItemKeyDown(item)}
                role="menuitem"
                tabIndex={0}
              >
                {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

