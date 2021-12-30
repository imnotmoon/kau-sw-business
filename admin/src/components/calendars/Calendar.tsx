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
        <input type="date" onChange={changeStartDate} value={startDate}/>
      </div>
      <div>
        <div>종료 날짜</div>
        <input type="date" onChange={changeEndDate} value={endDate}/>
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

export default Calendar
