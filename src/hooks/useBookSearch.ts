import { useQuery } from '@tanstack/react-query';
import { searchBooks } from '../api/books';
import type { BookSearchParams } from '../types/book';

export const useBookSearch = (params: BookSearchParams) => {
    return useQuery({
        queryKey: ['books', params],
        queryFn: () => searchBooks(params),
        enabled: !!params.query.trim(),
    });
};
