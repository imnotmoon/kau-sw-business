import React from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../../utils/styled'

const Confirm = ({ idx, close } : { idx: number, close: (e: React.MouseEvent) => void }) => {
  return (
    <Container onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div>정말 삭제하시겠습니까?</div>
        <div>
          <button onClick={close}>취소</button>
          <button>확인</button>
        </div>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(40px);
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  z-index: 200;

  & > div {
    font-size: 18px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-around;
    width: 60%;
  }

  & button {
    width: 90px;
    height: 40px;
    border: 1px solid ${COLORS.BORDER};
    background: none;
    color: white;

    &:hover {
      background: ${COLORS.FOG};
    }
  }
`

export default Confirm
