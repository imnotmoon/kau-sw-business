import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/theme';

const MenuItem = ({ elem, idx, title }) => {
  return title === elem.title ? (
    <Container key={idx} style={{ background: '#262f41', color: 'white' }}>
      <a href={elem.url} > {/** 공지사항 상세 페이지에서 다시 리스트로 넘어가게 하려면 필요 */}
        <a>{elem.title}</a>
      </a>
    </Container>
  ) : (
    <Container key={idx}>
      <a href={elem.url} style={{ color: 'black' }}>
        {elem.title}
      </a>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${COLORS.BORDER};
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

export default MenuItem;
