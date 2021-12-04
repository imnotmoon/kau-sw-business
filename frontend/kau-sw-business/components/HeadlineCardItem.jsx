import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import moment from 'moment';
import { COLORS } from '../styles/theme';

const HeadlineCardItem = ({ src, id, title, createdAt }) => {
  return (
    <Container>
      <Link href={`${src}/${id}`}>{title}</Link>
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
