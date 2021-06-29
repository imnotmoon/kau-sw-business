import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// interface
interface ImageContentProp {
  src: any;
  alt?: string;
  paddingLeft: number;
}

const ImageContent: React.FC<ImageContentProp> = ({ src, alt, paddingLeft }) => {
  return (
    <Container paddingLeft={paddingLeft}>
      <Image quality={100} src={src} alt={alt ? alt : ''} />
    </Container>
  );
};

const Container = styled.div<{ paddingLeft: number }>`
  padding-left: ${(props) => props.paddingLeft}px;
`;

export default ImageContent;
