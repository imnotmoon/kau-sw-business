import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../styles/theme';

import { notiData, newsData } from '../utils/sample-data';
import HeadlineCardItem from './HeadlineCardItem';

const HeadlineCard = ({ data, title, src }) => {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <Link href={src}>more...</Link>
      </div>
      {data.map((item) => <HeadlineCardItem key={item.id} {...item} src={src}/>)}
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  min-width: 300px;
  box-sizing: content-box;
  padding: 10px 20px 30px 20px;
  color: ${COLORS.TITLE};

  border: 1px solid ${COLORS.CARD_BORDER};

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h3 {
      font-weight: 400;
      font-size: 22px;
    }
  }

  @media screen and (max-width: 720px) {
    width: 70vw;
  }
`;

export default HeadlineCard;
