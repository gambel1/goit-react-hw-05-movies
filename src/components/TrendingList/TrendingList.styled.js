import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ListLi = styled.li`
  width: 370px;
`;
export const ListLink = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListP = styled.p`
  margin-bottom: 5px;
  text-align: center;
`;

// export const ListImg = styled.img`
//   margin-bottom: 5px;
// `;
