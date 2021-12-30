import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import Dropdown from './Dropdown';
import useCalendarInput from '../../hooks/useCalendarInput';
import Calendar from './Calendar';

const NewCalendar = () => {
  const [showBigCategory, setShowBigCategory] = useState(false);
  const [showSmallCategory, setShowSmallCategory] = useState(false);
  const { 
    calendarForm,
    bigCategory,
    smallCategory,
    onChangeTitle, 
    onChangeBigCategory, 
    onChangeSmallCategory, 
    onChangeStartDate, 
    onChangeEndDate} = useCalendarInput();

  return (
    <Container>
      <Title>일정 등록</Title>
      <Form>
        <FormTitle>
          <span>제목</span>
          <input type="text" onChange={onChangeTitle}/>
        </FormTitle>
        <FormLink>
          <span>연결 링크</span>
          <div>
            <div onClick={() => { setShowBigCategory(!showBigCategory); setShowSmallCategory(false) }}>
              {bigCategory}
              {showBigCategory && <Dropdown type="big" onClick={onChangeBigCategory}/>}
            </div>
            <div onClick={() => { setShowSmallCategory(!showSmallCategory); setShowBigCategory(false) }}>
              {smallCategory}
              {showSmallCategory && <Dropdown type="small" bigCategory={bigCategory} onClick={onChangeSmallCategory}/>}
            </div>
          </div>
        </FormLink>
        <FormCalendar>
          <span>기간</span>
          <Calendar 
            startDate={calendarForm.startDate} 
            endDate={calendarForm.endDate} 
            changeStartDate={onChangeStartDate} 
            changeEndDate={onChangeEndDate}
          />
        </FormCalendar>
      </Form>
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

const Form = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;

  & > div {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 4fr;
    width: 90%;
    padding-left: 20px;
    align-items: center;
  }

  & span {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
`

const FormTitle = styled.div`
  & > input {
    height: 40px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid white;
    padding-left: 10px;
    font-size: 18px;
    color: white;

    &:focus {
      outline: none;
    }
  }
`

const FormLink = styled.div`
  & > div {
    display: flex;
    gap: 50px;

    & > div {
      border: 1px solid white;
      color: white;
      width: 200px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
`

const FormCalendar = styled.div`

`

export default NewCalendar
