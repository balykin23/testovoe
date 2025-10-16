'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип для темы
type Theme = 'light' | 'dark';

// Интерфейс контекста темы
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Создаем контекст с дефолтными значениями
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер темы
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Инициализируем тему из localStorage или дефолтно 'light'
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Эффект для загрузки темы из localStorage при монтировании
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Эффект для применения темы к document.documentElement
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Функция переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Не рендерим контент до монтирования, чтобы избежать мерцания
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования темы
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};

