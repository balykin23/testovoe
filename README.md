# Testovoe

Next.js приложение для работы с уведомлениями социальной сети с бесконечной пагинацией.

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
  /app                  - Next.js App Router (маршрутизация)
    /notifications      - Страница уведомлений
    /likes/[eventId]    - Страница списка лайков
    /contacts           - Страница контактов
    layout.tsx          - Корневой layout с провайдерами
    page.tsx            - Главная страница
  
  /features             - Компоненты страниц (feature components)
    NotificationsPage.tsx
    LikesPage.tsx
    ContactsPage.tsx
    HomePage.tsx
  
  /components           - UI компоненты
    /ui                 - Переиспользуемые UI (Avatar)
    /common             - Общие компоненты (Toast, Modal, ThemeToggle)
    /icons              - SVG иконки
    /NotificationCard   - Карточка уведомления
    /NotificationTabs   - Табы фильтрации
    /Sidebar            - Боковое меню навигации
    /skeletons          - Skeleton loaders
  
  /hooks                - Кастомные React хуки
    useNotifications.ts - Хук для бесконечной пагинации
  
  /api                  - API функции
    notifications.ts    - Функции для загрузки уведомлений
  
  /providers            - React провайдеры
    QueryProvider.tsx   - TanStack Query provider
  
  /contexts             - React Context API
    ThemeContext.tsx    - Управление темой
    ToastContext.tsx    - Управление уведомлениями
  
  /styles               - CSS модули и глобальные стили
    animations.css      - Переиспользуемые анимации
    globals.css         - CSS переменные, reset, темы
    /pages              - Стили для страниц
  
  /utils                - Утилиты
    classNames.ts       - cn() - объединение классов
    formatters.ts       - formatTimeAgo() - форматирование времени
    generators.ts       - generateId() - генерация ID
  
  /constants            - Константы приложения
    index.ts            - EVENT_TYPES, DURATIONS, ROUTES, etc.
  
  /mocks                - Моковые данные
    data.ts             - Тестовые уведомления
    types.ts            - TypeScript типы
```

---

## 🎨 Подход к разработке

### Архитектура

**Feature-Sliced Design** - компоненты организованы по фичам:
- `/features` - компоненты страниц
- `/components` - переиспользуемые UI компоненты
- `/hooks` - кастомные хуки
- `/api` - API layer

**App Router (Next.js 14)** - новая система роутинга:
- Файловая структура в `/app` = URL маршруты
- Server/Client Components
- `page.tsx` - компонент страницы
- `layout.tsx` - обертка для страниц

### CSS

- **CSS Modules** - изоляция стилей, нет конфликтов
- **CSS переменные** - единообразие (spacing, sizing, colors, transitions)
- **Темная/Светлая тема** - через `data-theme` атрибут
- **Переиспользуемые анимации** - в `animations.css`
- **Нет UI библиотек** - только чистый CSS

Пример использования переменных:
```css
.button {
  padding: var(--space-4);           /* 16px */
  border-radius: var(--radius-md);   /* 8px */
  transition: var(--transition-bg);  /* background-color 200ms ease */
  background: var(--bg-primary);     /* Меняется с темой */
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
- **Accessibility** - keyboard navigation, ARIA атрибуты, semantic HTML
- **TypeScript** - строгая типизация всех компонентов
- **Composition** - переиспользуемые компоненты

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

### 1. Бесконечная пагинация с TanStack Query

**Технология**: `@tanstack/react-query` + `useInfiniteQuery`

**Как работает**:
- Данные загружаются порциями по 10 элементов
- При скролле до конца списка автоматически загружается следующая страница
- IntersectionObserver отслеживает видимость триггер-элемента
- Показываются скелетоны во время загрузки

**Код**:
```tsx
// Хук для загрузки уведомлений
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useNotifications();

// Все уведомления из всех страниц
const allNotifications = data?.pages.flatMap(page => page.results) ?? [];

// IntersectionObserver для автоподгрузки
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  });
  observer.observe(targetElement);
}, [hasNextPage, fetchNextPage]);
```

### 2. Чистый код

- Использование `cn()` вместо строковых конкатенаций
- Константы вместо magic numbers
- Переиспользуемые утилиты
- Нет комментариев - код говорит сам за себя

### 3. Производительность

- React Query кеширование и автоматическая дедупликация запросов
- Оптимизация изображений через Next.js Image
- CSS переменные для быстрого изменения темы
- Skeleton loaders для лучшего UX

### 4. Доступность (a11y)

- **Keyboard navigation** - Enter, Space, Escape
- **ARIA атрибуты** - `aria-label`, `aria-expanded`, `role`
- **Focus management** - `focus-visible` для keyboard-only focus
- **Semantic HTML** - `<article>`, `<nav>`, `<main>`, `<header>`

### 5. Адаптивность

- **Mobile-first** подход
- **Breakpoint**: 768px (мобильный/десктоп)
- Бургер-меню на мобильных устройствах
- Адаптивные размеры шрифтов и отступов

---

## 📦 Основные технологии

- **Next.js 14** - React framework с App Router
- **TypeScript** - строгая типизация
- **TanStack Query** - управление серверным состоянием и кеширование
- **CSS Modules** - изоляция стилей
- **React Context** - глобальное состояние (Theme, Toast)
- **IntersectionObserver** - отслеживание видимости элементов

---

## 🎯 Best Practices

### 1. Типобезопасность
Все компоненты, функции и API типизированы с TypeScript:
```tsx
interface INotificationCardProps {
  event: TSocialEvent;
}

export const NotificationCard: React.FC<INotificationCardProps> = ({ event }) => {
  // ...
};
```

### 2. Single Source of Truth
Константы хранятся в `/constants`:
```tsx
export const EVENT_TYPES = {
  COMMENT: 'comment',
  FOLLOW: 'follow',
  LIKE: 'like',
} as const;
```

### 3. Separation of Concerns
- **UI компоненты** - в `/components`
- **Бизнес-логика** - в `/features`
- **API запросы** - в `/api`
- **Утилиты** - в `/utils`

### 4. Читаемость
- Использование `cn()` для условных классов
- Понятные имена переменных и функций
- Ранние return для упрощения логики

### 5. Maintainability
- CSS переменные для легкого изменения дизайна
- Централизованные константы
- Модульная структура

---

## 📝 Примеры использования

### Импорты
```tsx
import { cn, formatTimeAgo } from '@/utils';
import { EVENT_TYPES, ROUTES } from '@/constants';
import { Avatar } from '@/components/ui';
import { useNotifications } from '@/hooks/useNotifications';
```

### Бесконечная пагинация
```tsx
const { data, fetchNextPage, hasNextPage } = useNotifications();
const notifications = data?.pages.flatMap(p => p.results) ?? [];

<div ref={observerTarget}>
  {notifications.map(notification => (
    <NotificationCard key={notification.id} event={notification} />
  ))}
</div>
```

### Условные классы
```tsx
const cardClass = cn(
  styles.card,
  isRead && styles.read,
  isActive && styles.active
);
```

### Форматирование
```tsx
<time dateTime={created}>
  {formatTimeAgo(created)}
</time>
```

---

## 🚧 Развитие проекта

### Возможные улучшения:
- [ ] Реальное API вместо моков
- [ ] Оптимистичные обновления при лайках/подписках
- [ ] Виртуализация списка для больших данных (react-window)
- [ ] Prefetching следующей страницы для мгновенной загрузки
- [ ] Service Worker для офлайн режима
- [ ] React Query DevTools в dev режиме

---

**Автор**: Nikita  
**Технологии**: Next.js 14, TypeScript, TanStack Query, CSS Modules  
**Подход**: Feature-Sliced Design, App Router, Infinite Scroll
