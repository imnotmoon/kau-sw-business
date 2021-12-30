import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle';
import Dropdown from './Dropdown';
import APIs from '../../utils/networking';
import { Schedule } from '../../interfaces';
import ScheduleItem from './ScheduleItem';
import ScheduleListHeader from './ScheduleListHeader';
import { CATEGORY_MAP } from './NewCalendar';

const EditCalendar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [category, setCategory] = useState('SW 전공교육');

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const onClickCategory = (e: React.MouseEvent) => {
    setCategory((e.target as HTMLDivElement).innerText.trim());
  }

  const onChangeStartDate = (e: React.FormEvent) => {
    const newStartDate = (e.target as HTMLInputElement).value;
    if(!endDate || endDate.length === 0) {
      setStartDate(newStartDate);
    } else {
      if(endDate >= newStartDate) setStartDate(newStartDate);
    }
  }

  const onChangeEndDate = (e: React.FormEvent) => {
    const newEndDate = (e.target as HTMLInputElement).value;
    if(!startDate || startDate.length === 0) {
      setEndDate(newEndDate);
    } else {
      if(startDate <= newEndDate) setEndDate(newEndDate);
    }
  }

  useEffect(() => {
    APIs.getSchedules({startDate, endDate, category: CATEGORY_MAP[category], order: 'date'}).then(res => setSchedules(res.data));
  }, [category, startDate, endDate]);

  const refresh = () => {
    APIs.getSchedules({startDate, endDate, category: CATEGORY_MAP[category], order: 'date'}).then(res => setSchedules(res.data));
  }

  return (
    <Container>
      <Title>일정 수정/삭제</Title>
      <div>
        <Search>
          <span></span>
          <div>
            <SearchOption>
              <span>시작</span>
              <input type="date" onChange={onChangeStartDate} value={startDate}/>
            </SearchOption>
            <SearchOption>
              <span>종료</span>
              <input type="date" onChange={onChangeEndDate} value={endDate}/>
            </SearchOption>
            <SearchOption>
              <span>카테고리</span>
              <div onClick={() => { setShowDropdown(!showDropdown); }}>
                {category}
                {showDropdown && <Dropdown type="category" onClick={onClickCategory} />}
              </div>
            </SearchOption>
          </div>
        </Search>
        <ScheduleList>
          <ScheduleListHeader />
          <Padding />
          {schedules.map((schedule) => {
            return <ScheduleItem schedule={schedule} key={schedule.id} refresh={refresh}/>
          })}
        </ScheduleList>
      </div>
    </Container>
  )
}

const Container = styled.div`
	width: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;

  & > div {
    width: 90%;
  }
`;

const Search = styled.div`
  border-bottom: 1px solid white;
  margin-top: 20px;
  padding-bottom: 10px;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  color: white;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & input {
    width: 150px;
    height: 35px;
    padding-left: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid white;

    &:focus {
      outline: none;
    }
  }
`

const SearchOption = styled.div`
  display: flex;
  width: 30%;
  gap: 20px;
  align-items: center;

  & > div {
    border: 1px solid white;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    position: relative;
    transition: all 0.3s ease;

    & > div {
      width: 150px;
    }
    
    &:hover {
      background-color: rgba(85, 129, 179, 0.8);
      transition: all 0.3s ease;
    }
  }
`

const ScheduleList = styled.section`
  overflow-y: scroll;
  height: calc(100vh - 300px);
  width: 100%;
  position: relative;
`

const Padding = styled.div`
  height: 50px;
`

export default EditCalendar
