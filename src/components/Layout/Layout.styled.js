import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 15px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 15px;
`;

export const HeaderLink = styled(NavLink)`
  :hover {
    color: red;
  }
`;

export const Main = styled.main`
  padding: 15px;
`;
