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

  @media screen and (max-width: 1100px) {
    width: 60vw;
  }
`;

export default NewsBanner;
