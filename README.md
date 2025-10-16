# Testovoe

Next.js приложение для работы с уведомлениями социальной сети.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшн
npm run build
npm start
```

Приложение будет доступно по адресу: `http://localhost:3000`

---

## 📁 Структура проекта

```
/src
  /app              - Next.js App Router (pages)
  /components       - React компоненты
    /ui             - Переиспользуемые UI компоненты (Avatar)
    /icons          - SVG иконки
  /contexts         - React Context (Theme, Toast)
  /pages            - Компоненты страниц
  /styles           - CSS модули и глобальные стили
    animations.css  - Переиспользуемые анимации
    globals.css     - CSS переменные и reset
  /utils            - Утилиты (cn, formatTimeAgo, generateId)
  /constants        - Константы приложения
  /mocks            - Моковые данные
```

---

## 🎨 Подход к разработке

### CSS

- **CSS Modules** для изоляции стилей
- **CSS переменные** для единообразия (spacing, sizing, colors, transitions)
- **Переиспользуемые анимации** в `animations.css`
- **Темная/Светлая тема** через `data-theme` атрибут

Пример:
```css
.button {
  padding: var(--space-4);           /* 16px */
  border-radius: var(--radius-md);   /* 8px */
  transition: var(--transition-bg);  /* background-color 200ms ease */
}
```

### Utils

**`cn()`** - объединение CSS классов:
```tsx
const className = cn(
  styles.card,
  isActive && styles.active,
  isDisabled && styles.disabled
);
```

**`formatTimeAgo()`** - форматирование времени:
```tsx
formatTimeAgo('2025-10-15T10:00:00Z'); // "5 мин назад"
```

**`generateId()`** - генерация уникальных ID:
```tsx
generateId('toast'); // "toast-1697365200000-abc123"
```

### Константы

Централизованное хранение повторяющихся значений:
```tsx
import { EVENT_TYPES, DURATIONS, ROUTES } from '@/constants';

if (event.type === EVENT_TYPES.COMMENT) { /* ... */ }
setTimeout(() => {}, DURATIONS.TOAST_DEFAULT);
router.push(ROUTES.NOTIFICATIONS);
```

### Компоненты

- **DRY принцип** - нет дублирования кода
- **Accessibility** - keyboard navigation, ARIA атрибуты
- **TypeScript** - строгая типизация

Пример переиспользуемого компонента:
```tsx
<Avatar 
  src={user.avatar}
  alt={user.name}
  size="lg"
  online={user.online}
  verified={user.verified}
  clickable
  onClick={handleUserClick}
/>
```

---

## 🔑 Ключевые особенности

### 1. Чистый код
- Использование `cn()` вместо строковых конкатенаций
- Константы вместо magic numbers
- Переиспользуемые утилиты

### 2. Производительность
- React.memo для предотвращения лишних ре-рендеров
- useMemo/useCallback где необходимо
- CSS переменные для быстрого изменения темы

### 3. Доступность
- Keyboard navigation (Enter, Space, Escape)
- ARIA атрибуты
- `focus-visible` для keyboard-only focus
- Semantic HTML

### 4. Адаптивность
- Mobile-first подход
- CSS переменные для responsive design
- Breakpoint: 768px (мобильный/десктоп)

---

## 📦 Основные технологии

- **Next.js 14** - React framework
- **TypeScript** - типизация
- **CSS Modules** - изоляция стилей
- **React Context** - state management (Theme, Toast)

---

## 🎯 Best Practices

1. **Типобезопасность**: все компоненты и функции типизированы
2. **Single Source of Truth**: константы в `/constants`
3. **Переиспользование**: utils и UI компоненты
4. **Читаемость**: использование `cn()`, понятные имена
5. **Maintainability**: CSS переменные, централизованные константы

---

## 📝 Примеры кода

### Импорты
```tsx
import { cn, formatTimeAgo, generateId } from '@/utils';
import { EVENT_TYPES, DURATIONS, ROUTES } from '@/constants';
import { Avatar } from '@/components/ui';
```

### Использование
```tsx
// Объединение классов
const cardClass = cn(styles.card, isActive && styles.active);

// Форматирование времени
const timeAgo = formatTimeAgo(event.created);

// Константы
if (event.type === EVENT_TYPES.COMMENT) {
  // ...
}
```

---

