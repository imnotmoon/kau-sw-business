import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import Dropdown from './Dropdown';
import useCalendarInput, { ICalendarForm } from '../../hooks/useCalendarInput';
import Calendar from './Calendar';
import APIs from '../../utils/networking';
import useToast from '../../utils/toastStore';

const CATEGORY_MAP : any = {
  'SW 전공교육' : 'major',
  '산학협력': 'collab',
  'SW기초·융합교육': 'basic',
  'SW가치확산': 'influence'
}

const NewCalendar = () => {
  const [showBigCategory, setShowBigCategory] = useState(false);
  const [showSmallCategory, setShowSmallCategory] = useState(false);
  const [showCalendarCategory, setShowCalendarCategory] = useState(false);
  const { 
    calendarForm,
    bigCategory,
    smallCategory,
    onChangeTitle, 
    onChangeBigCategory, 
    onChangeSmallCategory, 
    onChangeStartDate, 
    onChangeEndDate,
    onChangeCategory
  } = useCalendarInput();
  const [_, setToast] = useToast();

  const onClickSubmit = async () => {
    if(!checkPostAvailable()) {
      setToast({show: true, content: '모든 내용을 입력해주세요.'});
      return;
    }
    // const result = await APIs.postSchedule({...calendarForm, category: CATEGORY_MAP[calendarForm.category]});
    // if(result.success) {
    setToast({show: true, content: '일정 등록에 성공했습니다.'});
    // }
  }

  const checkPostAvailable = () => {
    const keys : Array<keyof ICalendarForm> = ['title', 'link', 'startDate', 'endDate', 'category']
    const checks = keys.map((key) => {
      if(calendarForm[key].length === 0) return false;
      return true
    });
    if(checks.some((b) => b === false)) return false;
    return true;
  }

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
              {showBigCategory && <Dropdown onClick={onChangeBigCategory}/>}
            </div>
            <div onClick={() => { setShowSmallCategory(!showSmallCategory); setShowBigCategory(false) }}>
              {smallCategory}
              {showSmallCategory && <Dropdown bigCategory={bigCategory} onClick={onChangeSmallCategory}/>}
            </div>
          </div>
        </FormLink>
        <FormCategory>
          <span>카테고리</span>
          <div onClick={() => { setShowCalendarCategory(!showCalendarCategory); }}>
            {calendarForm.category}
            {showCalendarCategory && <Dropdown type="category" onClick={onChangeCategory} />}
          </div>
        </FormCategory>
        <div>
          <span>기간</span>
          <Calendar 
            startDate={calendarForm.startDate} 
            endDate={calendarForm.endDate} 
            changeStartDate={onChangeStartDate} 
            changeEndDate={onChangeEndDate}
          />
        </div>
        <Button onClick={onClickSubmit}>등록</Button>
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

const FormCategory = styled.div`
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
`

const Button = styled.button`
  margin-top: 80px;
  border: 1px solid white;
  width: 150px;
  height: 50px;
  align-self: end;
  background: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(85, 129, 179, 0.8);
    transition: all 0.3s ease;
  }
`

export default NewCalendar
