import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 100px 0px;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.title2.fontSize};
  font-weight: ${theme.typography.title2.fontWeight};
  color: ${theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  max-width: 568px;
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
`;

export const ResultCount = styled.p`
  font-size: ${theme.typography.body2.fontSize};
  color: ${theme.colors.text.primary};

  span {
    color: ${theme.colors.primary};
  }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;