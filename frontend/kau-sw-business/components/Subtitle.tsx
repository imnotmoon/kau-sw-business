import React from 'react';
import styled from 'styled-components';

// interface
interface SubTitleProp {
  text: string;
}

const Subtitle: React.FC<SubTitleProp> = ({ text }) => {
  return (
    <Container>
      <Bullet />
      <div>{text}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: top;
  margin-bottom: 15px;

  & > div:nth-of-type(2) {
    font-weight: 500;
    color: #262f41;
    font-size: 20px;
  }
`;

const Bullet = styled.div`
  width: 10px;
  height: 20px;
  background: #262f41;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 6px;
`;

export default Subtitle;
