import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { COLORS } from '../styles/theme';

const HeadlineCardItem = ({ id, title, createdAt }) => {
  return (
    <Container>
      <a href=''>{title}</a>
      <div>{moment(createdAt).format('YYYY.MM.DD')}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;

  & > a,
  div {
    font-weight: 400;
    color: ${COLORS.TEXT2};
  }
`;

export default HeadlineCardItem;
