'use client'

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/utils';
import styles from './ThemeToggle.module.css';

// Компонент переключателя темы
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Обработчик клика
  const handleClick = () => {
    toggleTheme();
  };

  // Обработчик клавиатуры (Enter и Space)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      aria-pressed={theme === 'dark'}
      title={theme === 'light' ? 'Темная тема' : 'Светлая тема'}
    >
      <svg
        className={cn(styles.icon, styles.sunIcon)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="4" fill="currentColor" />
        <line x1="10" y1="1" x2="10" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="17" x2="10" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="1" y1="10" x2="3" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="3.63" y1="3.63" x2="5.05" y2="5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14.95" y1="14.95" x2="16.37" y2="16.37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="3.63" y1="16.37" x2="5.05" y2="14.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14.95" y1="5.05" x2="16.37" y2="3.63" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg
        className={cn(styles.icon, styles.moonIcon)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M17 10.5C17 14.6421 13.6421 18 9.5 18C5.35786 18 2 14.6421 2 10.5C2 6.35786 5.35786 3 9.5 3C9.67286 3 9.84444 3.00673 10.0145 3.02C8.86278 4.39696 8.16667 6.18489 8.16667 8.13889C8.16667 12.281 11.5257 15.64 15.6679 15.64C16.1845 15.64 16.6902 15.5899 17.18 15.4944C17.0659 15.4982 16.5337 10.5088 17 10.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

