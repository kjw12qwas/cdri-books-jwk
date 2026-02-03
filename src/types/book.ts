export interface Book {
    title: string;
    contents: string;
    url: string;
    isbn: string;
    datetime: string;
    authors: string[];
    publisher: string;
    translators: string[];
    price: number;
    sale_price: number;
    thumbnail: string;
    status: string;
}

export interface SearchMeta {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
}

export interface BookSearchResponse {
    meta: SearchMeta;
    documents: Book[];
}

export interface SearchParams {
    query: string;
    sort?: 'accuracy' | 'latest';
    page?: number;
    size?: number;
    target?: 'title' | 'isbn' | 'publisher' | 'person';
}