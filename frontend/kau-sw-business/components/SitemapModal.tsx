import React from 'react';
import styled from 'styled-components';
import { SimtemapModalProp } from '../interfaces/ComponentInterface';

const SitemapModal: React.FC<SimtemapModalProp> = ({ modalHandler }) => {
  const onModalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    modalHandler(false);
  };

  return (
    <Container onClick={onModalClick}>
      <ModalWindow>
        <h2>사이트맵</h2>
      </ModalWindow>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.01);
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100%;
  backdrop-filter: blur(4px);
`;

const ModalWindow = styled.div`
  width: 50vw;
  height: 30vh;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    font-weight: 600;
    font-size: 22px;
  }

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
  -webkit-box-shadow: 0px 5px 7px -7px #000000, -7px -8px 7px 2px rgba(209, 209, 209, 0);
  box-shadow: 0px 5px 13px -7px #000000, -7px -8px 7px 2px rgba(209, 209, 209, 0);
`;

export default SitemapModal;
