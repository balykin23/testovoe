// Типы событий в социальной сети
export type TSocialEventType =
  | 'comment'
  | 'follow'
  | 'paid_subscription'
  | 'like'
  | 'mention'
  | 'new_post';

// Пользователь социальной сети
export interface ISocialUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  online: boolean;
}

// Базовая структура события
export interface ISocialEventBase {
  id: string;
  type: TSocialEventType;
  created: string;
  user: ISocialUser;
  target_id?: string;
  image?: string;
  text?: string;
}

// Событие: новая публикация
export interface INewPostEvent extends ISocialEventBase {
  type: 'new_post';
  target_id: string;
  collection?: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    width?: number;
    height?: number;
    durationSec?: number;
  }[];
  is_owner?: boolean;
}

// Событие: комментарий
export interface ICommentEvent extends ISocialEventBase {
  type: 'comment';
  target_id: string;
  text: string;
}

// Событие: подписка
export interface IFollowEvent extends ISocialEventBase {
  type: 'follow';
  target_id: string;
  is_mutual?: boolean;
  is_following?: boolean;
}

// Событие: платная подписка
export interface IPaidSubscriptionEvent extends ISocialEventBase {
  type: 'paid_subscription';
  target_id: string;
  plan: 'monthly' | 'yearly';
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
}

// Событие: лайк
export interface ILikeEvent extends ISocialEventBase {
  type: 'like';
  target_id: string;
  users_preview?: ISocialUser[];
  all_users?: ISocialUser[];
  other_count?: number;
}

// Событие: упоминание
export interface IMentionEvent extends ISocialEventBase {
  type: 'mention';
  target_id: string;
  context?: string;
}

// Объединенный тип всех событий
export type TSocialEvent =
  | ICommentEvent
  | IFollowEvent
  | IPaidSubscriptionEvent
  | ILikeEvent
  | IMentionEvent
  | INewPostEvent;

// Ответ API со списком событий
export interface ISocialEventsResponse {
  total: number;
  results: TSocialEvent[];
}

