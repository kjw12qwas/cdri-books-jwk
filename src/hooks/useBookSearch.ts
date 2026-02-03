import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { searchBooks } from '../api/books';
import type { SearchParams } from '../types/book';

const useBookSearch = (params: SearchParams) => {
    return useQuery({
        queryKey: ['books', params],
        queryFn: () => searchBooks(params),
        enabled: !!params.query,
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
    });
};

export default useBookSearch;