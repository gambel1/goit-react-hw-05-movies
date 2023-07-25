import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

export const ListButton = styled(Button)`
  margin-bottom: 10px;
  /* border-radius: 4px;
  cursor: pointer;

  :hover {
    color: red;
  } */
`;

export const ListH2 = styled.h2`
  margin-bottom: 5px;
`;

export const ListP = styled.p`
  margin-bottom: 5px;
`;

export const ListLink = styled(NavLink)`
  margin-bottom: 5px;

  :hover {
    color: red;
  }
`;
