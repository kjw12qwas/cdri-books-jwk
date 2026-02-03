import { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import EmptyState from '../../components/common/EmptyState';
import BookIcon from '../../assets/icon_book.svg';
import * as S from './styles';
import { FiSearch } from 'react-icons/fi';
import useBookSearch from '../../hooks/useBookSearch';

const SearchPage = () => {
  /**
   * 분리하지 않는다면 사용자가 입력시 API 과다 호출
   */
  const [query, setQuery] = useState(''); // 입력창의 현재 값
  const [searchQuery, setSearchQuery] = useState('') // 실제 검색에 사용되는 값
  const [page, setPage] = useState(1);

  const { data, isLoading } = useBookSearch({
    query: searchQuery,
    page,
    size: 10,
  })

  // data가 없을 때 기본값
  const totalCount = data?.meta.total_count ?? 0;
  const books = data?.documents ?? [];

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setPage(1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <S.Wrapper>
      <S.Title>도서 검색</S.Title>
      <S.SearchRow>
        <S.SearchInputWrapper>
          <Input
            leftIcon={<FiSearch />}
            placeholder="검색어를 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </S.SearchInputWrapper>
        <Button variant="outline" style={{ padding: '10px', fontSize: '14px' }}>
          상세검색
        </Button>
      </S.SearchRow>
      <S.ResultCount>
        도서 검색 결과 &nbsp;총 <span>{totalCount}</span>건
      </S.ResultCount>
      {
        isLoading ? (
          <S.EmptyWrapper>로딩중...</S.EmptyWrapper>
        ) : books.length > 0 ? (
          <div>
            {
              books.map((book) => (
                <div key={book.isbn}>{book.title}</div>
              ))
            }
          </div>
        ) : (
          <S.EmptyWrapper>
            <EmptyState
              icon={<img src={BookIcon} alt="책 아이콘" width={80} height={80} />}
              message="검색된 결과가 없습니다."
            />
          </S.EmptyWrapper>
        )
      }
    </S.Wrapper>
  );
};

export default SearchPage;