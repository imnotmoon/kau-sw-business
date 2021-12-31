import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Banner } from '../../interfaces';
import useToast from '../../utils/toastStore';
import APIs from '../../utils/networking';

interface Prop {
  idx: number,
  close: () => void,
  banner: Banner
}

const EditBannerModal = ({ idx, close, banner } : Prop) => {
  const [large, setLarge] = useState(banner.title);
  const [small, setSmall] = useState(banner.content);
  const [priority, setPriority] = useState(`${banner.viewOrder}`);
  const [_, setToast] = useToast();

  const onChangeLarge = (e: React.FormEvent) => {
    setLarge((e.target as HTMLInputElement).value)
  }

  const onChagngeSmall = (e: React.FormEvent) => {
    setSmall((e.target as HTMLInputElement).value);
  }

  const onChangePriority = (e: React.FormEvent) => {
    setPriority((e.target as HTMLInputElement).value);
  }

  const onClickConfirm = async () => {
    if(!Number.isInteger(+priority)) {
      setToast({show: true, content: '우선순위 값이 잘못되었습니다.'})
      return;
    }

    const formData = new FormData();
    formData.append('id', `${banner.id}`);
    formData.append('title', large);
    formData.append('content', small);
    formData.append('useFlag', "true");
    priority && formData.append('viewOrder', priority);

    const result = await APIs.editBanner(formData).then((res) => res.data);
    if(result.success) {
      setToast({show: true, content: '배너 수정에 성공했습니다.'});
      close();
    } else {
      setToast({show: true, content: '배너 수정에 실패했습니다.'});
    }
  }

  return (
    <Container onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h1>배너 수정</h1>
        <Edit>
          <Input>
            <span>대제목</span>
            <input type="text" onChange={onChangeLarge} value={large}/>
          </Input>
          <Input>
            <span>소제목</span>
            <input type="text" onChange={onChagngeSmall} value={small}/>
          </Input>
          <Input>
            <span>우선순위</span>
            <input type="text" onChange={onChangePriority} value={priority} />
          </Input>
        </Edit>
        <Buttons>
          <RejectButton onClick={close}>취소</RejectButton>
          <ConfirmButton onClick={onClickConfirm}>확인</ConfirmButton>
        </Buttons>
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 70vw;
  min-width: 800px;
  height: 45vh;
  min-height: 400px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);

  & > h1 {
    color: white;
    font-size: 24px;
  }
`

const Edit = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Input = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: white;
    font-size: 20px;
  }

  & > input {
    height: 32px;
    font-size: 18px;
    padding-left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    border: 1px solid white;
    width: 80%;

    &:focus {
      outline: none;
      border: 1px solid white;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 30px;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  background: none;

  &:active {
    outline: none;
  }
`

const RejectButton = styled(Button)`
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(170, 33, 27);
    transition: all 0.3s ease;
  }
`

const ConfirmButton = styled(Button)`
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(77, 119, 148);
    transition: all 0.3s ease;
  }
`

export default EditBannerModal
