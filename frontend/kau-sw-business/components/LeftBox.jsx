import React from 'react';
import styled from 'styled-components';

import { MenuItems } from '../utils/MenuInterface';
import MenuItem from './MenuItem';

const LeftBox = ({ title, state, front }) => {
  const subTitles = MenuItems[state].subElements;
  console.log(subTitles);

  return (
    <Container>
      <div>
        <span>{front}</span>
      </div>
      {subTitles.map((elem, idx) => (
        <MenuItem key={idx} elem={elem} idx={idx} title={title} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 15vw;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    display: none;
  }
  & > div:nth-of-type(1) {
    background: #666666;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    & > span {
      color: white;
      font-size: 24px;
      font-weight: 300;
    }
  }
`;

export default LeftBox;
