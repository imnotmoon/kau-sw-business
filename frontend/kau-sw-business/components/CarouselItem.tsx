import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { CarouselItemProp } from '../interfaces/ComponentInterface';

const CarouselItem: React.FC<CarouselItemProp> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CarouselItem;

const Container = styled.div`
  & > div {
    height: 380px;
    & > img {
      width: 100vw;
      height: 380px;
      object-fit: cover;
    }
  }
`;
