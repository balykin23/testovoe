/**
 * Глобальные константы приложения
 */

// ===== ТИПЫ СОБЫТИЙ =====
export const EVENT_TYPES = {
  COMMENT: 'comment',
  FOLLOW: 'follow',
  PAID_SUBSCRIPTION: 'paid_subscription',
  LIKE: 'like',
  MENTION: 'mention',
  NEW_POST: 'new_post',
} as const;

// ===== ДЛИТЕЛЬНОСТИ (в миллисекундах) =====
// Убрали as const, чтобы типы были number, а не литералами
export const DURATIONS = {
  TOAST_DEFAULT: 3000,
  SKELETON_LOADING: 700,
  PAGE_LOADING: 1000,
};

// ===== ТИПЫ ТАБОВ В УВЕДОМЛЕНИЯХ =====
export const NOTIFICATION_TABS = {
  ALL: 'all',
  COMMUNICATION: 'communication',
  ACTIONS: 'actions',
} as const;

// ===== КОНФИГУРАЦИЯ ТАБОВ =====
export const NOTIFICATION_TAB_CONFIG = [
  {
    id: 'all' as const,
    label: 'Все',
    ariaLabel: 'Показать все уведомления',
  },
  {
    id: 'communication' as const,
    label: 'Общения',
    ariaLabel: 'Показать уведомления об общении',
  },
  {
    id: 'actions' as const,
    label: 'Действия',
    ariaLabel: 'Показать уведомления о действиях',
  },
] as const;

// ===== ТИПЫ СОБЫТИЙ ПО КАТЕГОРИЯМ =====
export const EVENT_CATEGORIES = {
  COMMUNICATION: ['comment', 'mention'],
  ACTIONS: ['paid_subscription', 'like', 'follow'],
  ALL: ['comment', 'follow', 'paid_subscription', 'like', 'mention', 'new_post'],
} as const;

// ===== LABELS ДЛЯ ПЛАНОВ ПОДПИСОК =====
export const SUBSCRIPTION_PLAN_LABELS = {
  monthly: 'Месячная подписка',
  yearly: 'Годовая подписка',
} as const;

// ===== МАРШРУТЫ =====
export const ROUTES = {
  HOME: '/',
  MESSAGES: '/message',
  NOTIFICATIONS: '/notifications',
  SUBSCRIBERS: '/subscribers',
  SHOP: '/shop',
  BALANCE: '/myBalance',
  MARKETING: '/marketing',
  SCHEDULE: '/workSchedule',
  PROFILE: '/profile',
  LIKES: (eventId: string) => `/likes/${eventId}`,
} as const;

