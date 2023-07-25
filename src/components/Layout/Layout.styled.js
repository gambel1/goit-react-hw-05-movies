import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 15px 0;
  background-color: #2f364a;
`;

export const ListH1 = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 44px;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 15px;
`;

export const HeaderLink = styled(NavLink)`
  color: #ffffff;
  font-size: 26px;

  :hover,
  :focus {
    color: burlywood;
  }
`;

export const Main = styled.main`
  padding: 20px 0;
`;
