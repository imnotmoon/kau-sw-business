import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Schedule } from '../../interfaces';
import NewCalendar from './NewCalendar';

export const CATEGORY_MAP_REVERSE: any = {
  'major' : 'SW 전공교육',
  'collab' : '산학협력',
  'SW기초·융합교육': 'basic',
  'SW가치확산' : 'influence'
}

const ScheduleItem = ({schedule} : {schedule: Schedule}) => {
  const [opened, setOpened] = useState(false);

  const onClickItem = (e:React.MouseEvent) => {
    setOpened(!opened);
  }

  return (
    <>
      <Container onClick={onClickItem}>
        <div>{schedule.id}</div>
        <div>{schedule.title}</div>
        <div>{CATEGORY_MAP_REVERSE[schedule.category]}</div>
        <div>{schedule.link}</div>
        <div>{schedule.startDate}</div>
        <div>{schedule.endDate}</div>
      </Container>
      {opened && <NewCalendar edit={true} schedule={schedule}/>}
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1.3fr 1.3fr;
  color: white;
  min-width: 850px;
  overflow-x: scroll;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export default ScheduleItem
