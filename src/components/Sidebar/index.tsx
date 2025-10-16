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

const user = {
  id: 'u_123',
  name: '560,000,690',
  avatar: '/avatars/avatar.png',
  verified: true,
};

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, DURATIONS.SKELETON_LOADING);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const handleBurgerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleMenu();
    }
  };

  const sidebarClassName = cn(styles.sidebar, isMenuOpen && styles.open);

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

