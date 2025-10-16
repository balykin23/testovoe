import { mockNotifications } from '@/mocks/data';
import { TSocialEvent } from '@/mocks/types';

const PAGE_SIZE = 10;

export interface INotificationsResponse {
  results: TSocialEvent[];
  nextCursor: number | null;
  total: number;
}

export const fetchNotifications = async (cursor: number = 0): Promise<INotificationsResponse> => {
  await new Promise(resolve => setTimeout(resolve, 800));

  const allNotifications = mockNotifications.results;
  const start = cursor * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const results = allNotifications.slice(start, end);
  const hasMore = end < allNotifications.length;

  return {
    results,
    nextCursor: hasMore ? cursor + 1 : null,
    total: allNotifications.length,
  };
};

