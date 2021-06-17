import React, { ReactNode } from 'react';
import styled from 'styled-components';

// interface
interface CarouselItemProp {
  children?: ReactNode;
}

export default function CarouselItem({ children }) {
  return <Container>{children}</Container>;
}

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
