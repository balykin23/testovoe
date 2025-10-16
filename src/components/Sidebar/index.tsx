'use client'

import React, { useState, useEffect } from 'react';
import { cn } from '@/utils';
import { DURATIONS } from '@/constants';
import { SidebarSkeleton, UserBarSkeleton } from '@/components/skeletons';
import { ThemeToggle } from '@/components/common';
import { UserBar } from './UserBar';
import { BurgerButton } from './BurgerButton';
import { NavigationList } from './NavigationList';
import styles from './Sidebar.module.css';

// Временные данные пользователя (заменить на реальные)
const user = {
  id: 'u_123',
  name: '560,000,690', // или никнейм
  avatar: '/avatars/avatar.png', // помести файл в public/avatars/
  verified: true,
};

/**
 * Основной компонент сайдбара с навигацией
 * Поддерживает мобильную версию с бургер-меню
 */
export default function Sidebar() {
  // Состояние для управления открытием/закрытием мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Состояние загрузки
  const [isLoading, setIsLoading] = useState(true);

  // Эффект для имитации загрузки данных пользователя
  useEffect(() => {
    // Имитируем загрузку данных используя константу длительности
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, DURATIONS.SKELETON_LOADING);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  // Эффект для закрытия меню по нажатию Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Эффект для блокировки скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Обработчик открытия/закрытия меню
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Обработчик клика по оверлею (закрывает меню)
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  // Обработчик клика по кнопке с клавиатурной доступностью
  const handleBurgerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleMenu();
    }
  };

  // Формируем класс для сайдбара с учетом открытого состояния
  const sidebarClassName = cn(styles.sidebar, isMenuOpen && styles.open);

  // Если данные загружаются, показываем скелетон
  if (isLoading) {
    return (
      <>
        <header className={styles.mobileHeader}>
          <div className={styles.mobileUserBar}>
            <UserBarSkeleton />
          </div>
        </header>
        <SidebarSkeleton />
      </>
    );
  }

  return (
    <>
      <header className={styles.mobileHeader}>
        <BurgerButton
          isOpen={isMenuOpen}
          onClick={handleToggleMenu}
          onKeyDown={handleBurgerKeyDown}
        />

        <div className={styles.mobileUserBar}>
          <UserBar user={user} />
        </div>
      </header>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      <aside
        id="sidebar-nav"
        className={sidebarClassName}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className={styles.content}>
          <div className={styles.desktopUserBar}>
            <UserBar user={user} />
          </div>

          <NavigationList />

          <div className={styles.themeToggleWrapper}>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}

