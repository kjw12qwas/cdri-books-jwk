import { NavLink } from 'react-router-dom';
import theme from '../../../styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${theme.colors.white};
  padding: 24px 80px;
  height: 80px;
`;

export const Logo = styled(NavLink)`
  position: absolute;
  left: 80px;
  font-size: ${theme.typography.title1.fontSize};
  font-weight: ${theme.typography.title1.fontWeight};
  color: ${theme.colors.text.primary};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 56px;
  margin: 0 auto;
`;

export const NavItem = styled(NavLink)`
  font-size: ${theme.typography.body1.fontSize};
  font-weight: ${theme.typography.body1.fontWeight};
  color: ${theme.colors.text.primary};
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;

  &.active {
    color: ${theme.colors.text.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  }
`;