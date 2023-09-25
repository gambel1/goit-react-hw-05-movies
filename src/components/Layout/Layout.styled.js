import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 15px 0;
  background-color: #2f364a;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 15px;
`;

export const HeaderLink = styled(NavLink)`
  color: #ffffff;
  font-size: 26px;

  &:hover,
  &:focus,
  &.active {
    color: burlywood;
  }
`;

export const Main = styled.main`
  padding: 20px 0;
`;
