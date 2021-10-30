import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/theme';

const HeadlineCardItem = ({ link, title, postdate }) => {
  return (
    <Container>
      <a href={link}>{title}</a>
      <div>{postdate}</div>
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
