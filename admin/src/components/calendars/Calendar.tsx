import React from 'react'
import styled from '@emotion/styled'

interface ICalendar {
  startDate: string | undefined;
  endDate: string | undefined;
  changeStartDate: (e: React.FormEvent) => void;
  changeEndDate : (e: React.FormEvent) => void;
};

const Calendar = ({startDate, endDate, changeStartDate, changeEndDate} : ICalendar) => {
  return (
    <Container>
      <div>
        <div>시작 날짜</div>
        <DateInput type="date" onChange={changeStartDate} value={startDate}/>
      </div>
      <div>
        <div>종료 날짜</div>
        <DateInput type="date" onChange={changeEndDate} value={endDate}/>
      </div>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  gap: 50px;

  & > div {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const DateInput = styled.input`
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid white;
  height: 35px;
  width: 200px;
  padding-left: 10px;
  
  &:focus {
    outline: none;
  }
`

export default Calendar
