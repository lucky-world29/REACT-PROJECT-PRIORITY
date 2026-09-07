import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useDemoList = <T,>(key: string, getAll: () => Promise<T[]>) => useQuery({ queryKey: [key], queryFn: getAll });
export const useDemoMutation = <T, V>(key: string, mutationFn: (value: V) => Promise<T>) => {
    const client = useQueryClient();
    return useMutation({ mutationFn, onSuccess: () => client.invalidateQueries({ queryKey: [key] }) });
};
