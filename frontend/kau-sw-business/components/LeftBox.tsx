import React from 'react';
import styled from 'styled-components';
import { MenuItems } from '../utils/MenuInterface';

interface subTitle {
  url: string;
  title: string;
}

interface slideState {
  title: string;
  state: number;
  subTitles: subTitle[];
}

const LeftBox = ({ title, state }) => {
  const subTitles = MenuItems[state].subElements;

  return (
    <Container>
      <div>
        <span>{title}</span>
      </div>
      {subTitles.map((elem, idx) =>
        title === elem.title ? (
          <MenuItem key={idx} style={{ background: '#bd9e57', color: 'white' }}>
            <a>{elem.title}</a>
          </MenuItem>
        ) : (
          <MenuItem key={idx}>
            <a href={elem.url} style={{ color: 'black' }}>
              {elem.title}
            </a>
          </MenuItem>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 15vw;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
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
const MenuItem = styled.div`
  border-bottom: 1px solid #dfdfdf;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 300;
  }
`;

export default LeftBox;
