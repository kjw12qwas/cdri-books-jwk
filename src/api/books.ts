import { kakaoClient } from './client';
import type { BookSearchParams, BookSearchResponse } from '../types/book';

export const searchBooks = async (params: BookSearchParams): Promise<BookSearchResponse> => {
    const response = await kakaoClient.get<BookSearchResponse>('/v3/search/book', {
        params: {
            query: params.query,
            sort: params.sort || 'accuracy',
            page: params.page || 1,
            size: params.size || 10,
            ...(params.target && { target: params.target }),
        },
    });

    return response.data;
};
