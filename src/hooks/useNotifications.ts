import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchNotifications, deleteAllNotifications } from '@/api/notifications';

export const useNotifications = () => {
  return useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: ({ pageParam }) => fetchNotifications(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useDeleteAllNotifications = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAllNotifications,
    onSuccess: () => {
      // Инвалидируем кэш, чтобы перезагрузить данные
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
};

