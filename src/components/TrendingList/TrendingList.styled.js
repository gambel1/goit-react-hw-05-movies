import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ListH1 = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 44px;
`;

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

  :hover,
  :focus {
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.12), 5px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const ListTitleP = styled.h2`
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  margin-bottom: 10px;
  color: #000000;
`;

export const ListWrapDiv = styled.div`
  padding: 5px;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-right: 1px solid;
  color: rgba(0, 0, 0, 0.2);
`;

export const ListP = styled.p`
  :not(:last-child) {
    margin-bottom: 5px;
  }
  font-size: 20px;
  text-align: center;

  color: #000000;
`;

export const ListParagraphSpan = styled.span`
  font-size: 18px;
`;

// export const ListImg = styled.img`
//   margin-bottom: 5px;
// `;
