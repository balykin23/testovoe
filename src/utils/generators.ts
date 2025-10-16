/**
 * Утилиты для генерации уникальных значений
 */

/**
 * Генерирует уникальный ID на основе timestamp и случайного числа
 * @param prefix - Префикс для ID (например, 'toast', 'user')
 * @returns Уникальная строка ID
 * 
 * @example
 * generateId('toast') // 'toast-1234567890-abc123'
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

