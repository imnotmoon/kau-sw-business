import React from 'react'
import styled from '@emotion/styled'

const ScheduleListHeader = () => {
  return (
    <Header>
      <div>번호</div>
      <div>제목</div>
      <div>카테고리</div>
      <div>연결링크</div>
      <div>시작 날짜</div>
      <div>종료 날짜</div>
    </Header>
  )
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1.3fr 1.3fr;
  height: 50px;
  border-bottom: 1px solid white;
  color: white;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 200;
  background-color: rgb(50, 50, 50);

  & > div {
    text-align: center;
  }
`

export default ScheduleListHeader
