import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/api/notifications';

export const useNotifications = () => {
  return useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: ({ pageParam }) => fetchNotifications(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

