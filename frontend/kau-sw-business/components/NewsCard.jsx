import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/theme';

const NewsCard = ({ data }) => {
  const { title, state, startDate, endDate } = data;
  return (
    <Container>
      <header>
        <h3>{title}</h3>
        <span>{state}</span>
      </header>
      <div>
        {startDate}
        {endDate}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 20vw;
  min-width: 250px;
  background-color: ${COLORS.BACKGROUND};
  height: 200px;
  padding: 10px 15px;
  border: 1px solid ${COLORS.CARD_BORDER};
  color: ${COLORS.TEXT2};

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLORS.TITLE};
  }
`;

export default NewsCard;
