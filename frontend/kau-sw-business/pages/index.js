import React from 'react';
import Carousel from '../components/Carousel';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import withHead from '../components/hoc/withHead';
import Board from '../components/Board';
import { COLORS } from '../styles/theme';

const Home = () => {
  return (
    <Container>
      <Carousel style={{ height: '380px' }} />
      <Board />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 80px;
  background: ${COLORS.BACKGROUND};
`;

export default withHead(Home, '');
