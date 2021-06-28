import React from 'react';
import styled from 'styled-components';

// interface
interface ImageContextProp {
  title: string;
}

const ImageContext: React.FC<ImageContextProp> = ({ title }) => {
  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
};

const Container = styled.div`
  background: url(/img/banner.jpg);
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    font-weight: 500;
    font-size: 40px;
    color: white;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export default ImageContext;
