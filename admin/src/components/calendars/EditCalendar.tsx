import React from 'react'
import styled from '@emotion/styled'
import { Title } from '../notices/NewNoticeStyle';

const EditCalendar = () => {
  return (
    <Container>
      <Title>일정 수정/삭제</Title>
    </Container>
  )
}

const Container = styled.div`
	width: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default EditCalendar
