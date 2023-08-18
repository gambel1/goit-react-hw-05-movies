import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

export const ListButton = styled(Button)`
  margin-bottom: 10px;
`;

export const ListWrapDiv = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 80px;
`;

export const ListH2 = styled.h2`
  text-align: center;
  margin-bottom: 5px;
`;

export const ListLi = styled.li`
  display: flex;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ListTitleGenreH4 = styled.h4`
  font-size: inherit;
  font-weight: 600;
  margin-right: 46px;
`;

export const ListTitleGenreP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.45);
`;

export const ListDescriptionDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

export const ListTitleDescriptionH4 = styled.h4`
  font-size: inherit;
  font-weight: 600;
`;

export const ListDescriptionTitleP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.45);
`;

export const ListRatingBoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ListRatingBoxLi = styled.li`
  display: flex;
  gap: 5px;
`;

export const ListRatingBoxSecondaryLi = styled.li`
  display: flex;
  gap: 20px;
`;

export const ListRatingTitleH4 = styled.h4`
  font-size: inherit;
  font-weight: 600;
`;

export const ListRatingP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.45);
`;

export const AdditionalListH3 = styled.h3`
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  padding: 7px 15px;

  width: fit-content;
  border-radius: 2px;
  color: #ffffff;
  background-color: #2f364a;
`;

export const AdditionalListLi = styled.li`
  margin-bottom: 5px;
`;

export const ListLink = styled(NavLink)`
  font-weight: 600;
  margin-bottom: 5px;
  color: #000000;

  :hover {
    color: red;
  }
`;
