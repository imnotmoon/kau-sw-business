import React, { useEffect } from 'react'
import styled from '@emotion/styled';

import useToast from '../utils/toastStore'

const Toast = () => {
  const [toast, setToast] = useToast();

  useEffect(() => {
    setTimeout(() => {
      setToast({ show: false, content: '' });
    }, 3000);
  }, []);

  return (
    <Container>
      {toast.content}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  width: 300px;
  height: 50px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 18px;
  z-index: 999;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
`

export default Toast
