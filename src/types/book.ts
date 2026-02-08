// Kakao Book API Response
export interface Book {
    title: string;              // 도서 제목
    contents: string;           // 도서 소개
    url: string;                // 도서 상세 URL
    isbn: string;               // ISBN
    datetime: string;           // 도서 출판날짜
    authors: string[];          // 도서 저자 리스트
    publisher: string;          // 도서 출판사
    translators: string[];      // 도서 번역자 리스트
    price: number;              // 도서 정가
    sale_price: number;         // 도서 판매가
    thumbnail: string;          // 도서 표지 미리보기 URL
    status: string;             // 도서 판매 상태
}

// 검색 대상 타입
export type SearchTarget = 'title' | 'person' | 'publisher';

// Kakao Book API Request Parameters
export interface BookSearchParams {
    query: string;              // 검색을 원하는 질의어 (필수)
    sort?: 'accuracy' | 'recency';  // 정확도순 | 최신순, 기본값 accuracy
    page?: number;              // 결과 페이지 번호, 1~50, 기본값 1
    size?: number;              // 한 페이지에 보여질 문서 수, 1~50, 기본값 10
    target?: SearchTarget;      // 검색 필드 제한 (제목, 저자명, 출판사)
}

export interface BookSearchResponse {
    meta: {
        total_count: number;
        pageable_count: number;
        is_end: boolean;
    };
    documents: Book[];
}
