/**
 * Утилита для объединения CSS классов
 * Аналог библиотеки classnames, но без зависимостей
 */

type ClassValue = string | number | boolean | undefined | null;

export const cn = (...classes: ClassValue[]): string => {
  return classes
    .filter((cls): cls is string | number => {
      return cls !== null && cls !== undefined && cls !== false && cls !== '';
    })
    .join(' ');
};

// Экспорт как classNames для более понятного API
export const classNames = cn;

