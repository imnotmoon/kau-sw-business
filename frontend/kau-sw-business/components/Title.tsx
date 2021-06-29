import React from 'react';
import styled from 'styled-components';

// interface
interface TitleProp {
  text: string;
}

const Title: React.FC<TitleProp> = ({ text }) => {
  return (
    <Container>
      <img src="/img/title_bullet.png" alt="" />
      <span>{text}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  & > img {
    width: 17px;
    height: 17px;
    padding-right: 10px;
  }
  & > span {
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }
`;

export default Title;
