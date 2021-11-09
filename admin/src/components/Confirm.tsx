import React, { useState } from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../utils/styled'

interface Prop {
  idx: number;
  close: (e: React.MouseEvent) => void
  API : Function;
}

const Confirm = ({ idx, close, API } : Prop) => {
  const [deleted, setDeleted] = useState(false);

  const onClickConfirm = async () => {
    const result = await API(idx);
    if(result.success) setDeleted(true);
    else alert('삭제에 실패했습니다.');
  }

  return (
    <Container onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {deleted 
          ? <><div>삭제되었습니다.</div><button onClick={close}>닫기</button></> 
          : (
            <>
              <div>정말 삭제하시겠습니까?</div>
              <div>
                <button onClick={close}>취소</button>
                <button onClick={onClickConfirm}>확인</button>
              </div>
            </>
          )}
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
