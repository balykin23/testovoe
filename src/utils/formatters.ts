/**
 * Утилиты для форматирования данных
 */

/**
 * Форматирует ISO дату в относительное время (например, "5 мин назад")
 * @param isoDate - ISO строка с датой
 * @returns Форматированная строка времени
 */
export const formatTimeAgo = (isoDate: string): string => {
  const now = new Date();
  const eventDate = new Date(isoDate);
  const diffInSeconds = Math.floor((now.getTime() - eventDate.getTime()) / 1000);

  // Константы для времени в секундах
  const MINUTE = 60;
  const HOUR = 3600;
  const DAY = 86400;
  const WEEK = 604800;

  if (diffInSeconds < MINUTE) return 'только что';
  if (diffInSeconds < HOUR) {
    return `${Math.floor(diffInSeconds / MINUTE)} мин назад`;
  }
  if (diffInSeconds < DAY) {
    return `${Math.floor(diffInSeconds / HOUR)} ч назад`;
  }
  if (diffInSeconds < WEEK) {
    return `${Math.floor(diffInSeconds / DAY)} дн назад`;
  }

  return eventDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
};

