import React from 'react';
import styled from 'styled-components';
import { CalendarCardsProp } from '../interfaces/ComponentInterface';

const CalendarCards: React.FC<CalendarCardsProp> = ({ imageUrl, title, link }) => {
  return (
    <Container imageUrl={imageUrl}>
      <h3>{title}</h3>
      <Button>
        <a href={link}>바로가기</a>
      </Button>
    </Container>
  );
};

const Container = styled.div<{ imageUrl: string }>`
  width: 348px;
  height: 203px;
  background: url(${(props) => props.imageUrl});
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;

  & > h3 {
    color: white;
    font-size: 22px;
  }
`;

const Button = styled.div`
  padding: 5px 20px 5px 20px;
  border: 1px solid white;

  & > a {
    text-decoration: none;
    color: white;
  }
`;

export default CalendarCards;
