export const EVENT_TYPES = {
  COMMENT: 'comment',
  FOLLOW: 'follow',
  PAID_SUBSCRIPTION: 'paid_subscription',
  LIKE: 'like',
  MENTION: 'mention',
  NEW_POST: 'new_post',
} as const;

export const DURATIONS = {
  TOAST_DEFAULT: 3000,
  SKELETON_LOADING: 700,
  PAGE_LOADING: 1000,
};

export const NOTIFICATION_TABS = {
  ALL: 'all',
  COMMUNICATION: 'communication',
  ACTIONS: 'actions',
} as const;

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

export const EVENT_CATEGORIES = {
  COMMUNICATION: ['comment', 'mention'],
  ACTIONS: ['paid_subscription', 'like', 'follow'],
  ALL: ['comment', 'follow', 'paid_subscription', 'like', 'mention', 'new_post'],
} as const;

export const SUBSCRIPTION_PLAN_LABELS = {
  monthly: 'Месячная подписка',
  yearly: 'Годовая подписка',
} as const;

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

