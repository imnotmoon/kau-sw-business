import React from 'react'
import styled from '@emotion/styled'

interface Prop {
  idx: number,
  close: () => void,
}

const EditBannerModal = ({ idx, close } : Prop) => {
  return (
    <Container onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>

      </Modal>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 80vw;
  min-width: 1000px;
  height: 80vh;
  min-height: 800px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  z-index: 200;
`

export default EditBannerModal
