import React from 'react';
import styled from 'styled-components';

const NewsBanner = () => {
  return (
    <Container>
      <img src="" alt="" />
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  min-width: 250px;
  border: 1px solid #dddddd;
  margin: 30px 10px 30px 10px;

  @media screen and (max-width: 1000px) {
    width: 80vw;
    max-width: 800px;
  }
`;

export default NewsBanner;
