import React from 'react';
import styled from 'styled-components';

interface SimtemapModalProp {
  modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  height: 100vh;
  backdrop-filter: blur(4px);
`;

const ModalWindow = styled.div`
  width: 50vw;
  height: 30vh;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, -27px -28px 7px 2px rgba(209, 209, 209, 0);
  box-shadow: 0px 10px 13px -7px #000000, -27px -28px 7px 2px rgba(209, 209, 209, 0);
`;

export default SitemapModal;
