import client from './client';
import type { BookSearchResponse, SearchParams } from '../types/book';

export const searchBooks = async (params: SearchParams): Promise<BookSearchResponse> => {
    const { data } = await client.get<BookSearchResponse>('/v3/search/book', {
        params,
    });
    return data;
};