/**
 * Утилита для объединения CSS классов
 * Аналог библиотеки classnames, но без зависимостей
 */

type ClassValue = string | number | boolean | undefined | null;

/**
 * Объединяет классы, игнорируя falsy значения
 * @param classes - Массив классов (строки, числа, boolean)
 * @returns Строка с объединенными классами
 * 
 * @example
 * cn('btn', 'btn-primary') // 'btn btn-primary'
 * cn('btn', false && 'active', 'large') // 'btn large'
 * cn('btn', isActive && 'active') // 'btn active' если isActive = true
 */
export const cn = (...classes: ClassValue[]): string => {
  return classes
    .filter((cls): cls is string | number => {
      return cls !== null && cls !== undefined && cls !== false && cls !== '';
    })
    .join(' ');
};

// Экспорт как classNames для более понятного API
export const classNames = cn;

