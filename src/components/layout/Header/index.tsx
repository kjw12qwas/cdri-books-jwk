
import * as S from './styles';

const Header = () => {
    return (
        <S.Wrapper>
            <S.Logo to="/">CERTICOS BOOKS</S.Logo>
            <S.Nav>
                <S.NavItem to="/">도서 검색</S.NavItem>
                <S.NavItem to="/liked">내가 찜한 책</S.NavItem>
            </S.Nav>
        </S.Wrapper>
    );
};

export default Header;