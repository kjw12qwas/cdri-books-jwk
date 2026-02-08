# CDRI Books

카카오 도서 검색 API를 활용한 도서 검색 및 찜 기능 웹 애플리케이션입니다.

## 프로젝트 개요

- **도서 검색**: 카카오 책 검색 API를 통한 도서 검색
- **상세 검색**: 제목, 저자, 출판사별 필터링 검색
- **찜 기능**: 관심 도서 저장 및 관리
- **검색 기록**: 최근 검색어 자동 저장

## 실행 방법

### 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/[username]/cdri-books-jwk.git
cd cdri-books-jwk
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
```bash
# .env 파일 생성
VITE_KAKAO_REST_API_KEY=your_kakao_api_key
```

4. 개발 서버 실행
```bash
npm run dev
```

## 폴더 구조

```
src/
├── api/                # API 클라이언트 및 요청 함수
│   ├── client.ts       # Axios 인스턴스 설정
│   └── books.ts        # 도서 검색 API
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── BookItem/       # 도서 아이템 (썸네일, 가격 표시)
│   ├── BookList/       # 도서 목록
│   ├── Pagination/     # 페이지네이션
│   ├── layout/         # 레이아웃 (Header)
│   ├── Button.tsx      # 공통 버튼
│   ├── CustomInput.tsx # 커스텀 입력 필드
│   ├── DetailSearchPopover.tsx  # 상세 검색 팝오버
│   └── EmptyState.tsx  # 빈 상태 표시
├── hooks/              # 커스텀 훅
│   ├── useBookSearch.ts    # 도서 검색 (React Query)
│   └── useSearchHistory.ts # 검색 기록 관리
├── pages/              # 페이지 컴포넌트
│   ├── SearchPage/     # 검색 페이지
│   └── FavoritesPage/  # 찜한 책 페이지
├── stores/             # 전역 상태 관리
│   └── favorites.ts    # 찜 기능 (Zustand)
├── styles/             # 스타일 설정
│   └── chakraTheme.ts  # Chakra UI 테마
└── types/              # TypeScript 타입 정의
    └── book.ts         # 도서 관련 타입
```

## 주요 코드 설명

### 상태 관리 전략

| 상태 유형 | 도구 | 용도 |
|----------|------|------|
| 서버 상태 | React Query | API 데이터 캐싱, 로딩/에러 처리 |
| 전역 상태 | Zustand | 찜 기능 (localStorage 연동) |
| URL 상태 | nuqs | 검색어, 페이지 번호 (공유 가능한 URL) |
| 로컬 상태 | useState | UI 상태 (확장/축소, 포커스 등) |

### 컴포넌트 설계

- **BookItem**: `memo()`로 불필요한 리렌더링 방지
- **Header**: `left`, `center`, `right` props로 유연한 레이아웃
- **CustomInput**: children으로 드롭다운 등 확장 가능
- **Button**: `variant` prop으로 스타일 변형 (primary, secondary, outline)

## 라이브러리 선택 이유

| 라이브러리 | 선택 이유 |
|-----------|----------|
| **Chakra UI** | 빠른 UI 개발, 일관된 디자인 시스템, TypeScript 지원 |
| **React Query** | 서버 상태 관리, 자동 캐싱, 로딩/에러 상태 처리 |
| **Zustand** | 간단한 API, Provider 불필요, persist 미들웨어로 localStorage 연동 |
| **nuqs** | URL 쿼리 파라미터 상태 관리, 뒤로가기/공유 URL 지원 |
| **Axios** | 인터셉터, 인스턴스 설정, 에러 처리 용이 |

## 강조하고 싶은 기능

### 1. Zustand를 활용한 찜 기능
```typescript
// stores/favorites.ts
export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            favorites: [],
            isFavorite: (isbn) => get().favorites.some((b) => b.isbn === isbn),
            toggleFavorite: (book) => set((state) => ({
                favorites: state.favorites.some((b) => b.isbn === book.isbn)
                    ? state.favorites.filter((b) => b.isbn !== book.isbn)
                    : [...state.favorites, book],
            })),
        }),
        { name: "favoriteBooks" }
    )
);
```
- `persist` 미들웨어로 localStorage 자동 동기화
- 어디서든 훅으로 접근 가능 (prop drilling 없음)

### 2. URL 상태 관리로 공유 가능한 검색
```typescript
// nuqs를 활용한 URL 쿼리 파라미터 관리
const [query, setQuery] = useQueryState("q", { defaultValue: "" });
const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
```
- 검색 결과 URL 공유 가능
- 브라우저 뒤로가기 지원

### 3. React Query의 조건부 쿼리
```typescript
// hooks/useBookSearch.ts
export const useBookSearch = (params: BookSearchParams) => {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => searchBooks(params),
        enabled: !!params.query,  // 검색어가 있을 때만 API 호출
    });
};
```
- 불필요한 API 호출 방지
- 자동 캐싱으로 동일 검색어 재검색 시 즉시 표시

## 기술 스택

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Chakra UI
- **State Management**: React Query, Zustand, nuqs
- **HTTP Client**: Axios
