import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import draftToHTML from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';

interface Preview {
  state: EditorState;
  close: React.Dispatch<boolean>;
  title: string;
}

const PreviewModal = ({ state, close, title } : Preview) => {
  const previewRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if(!previewRef.current) return;
    previewRef.current.innerHTML = draftToHTML(convertToRaw(state.getCurrentContent()))
  })

  const onClickClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    close(false);
  }

  return (
    <Container onClick={onClickClose}>
      <Modal>
        <Title>제목 : {title}</Title>
        <Content ref={previewRef}></Content>
        <Button onClick={onClickClose}>닫기</Button>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 50vw;
  min-width: 600px;
  max-width: 1000px;
  height: 70vh;
  max-height: 1000px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(50px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
  box-sizing: border-box; 
  z-index: 300;
`

const Title = styled.div`
  font-size: 22px;
  height: 50px;
  border-bottom: 1px solid black;
`

const Content = styled.div`
  overflow: scroll;
`

const Button = styled.button`
 position: absolute;
 bottom: 50px;
 width: calc(100% - 100px);
 height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  background: none;
  font-size: 18px;
`

export default PreviewModal
