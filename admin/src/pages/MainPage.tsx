import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '../components/Header';

function MainPage() {
  const history = useHistory();
  // if (!sessionStorage.getItem("token")) history.push("/login");

  return (
    <Container>
      <Header></Header>
      <section></section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > section {
    margin-top: 30px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    height: calc(100vh - 140px);
    border-radius: 20px;
    width: 90vw;
  }
`;

export default MainPage;
