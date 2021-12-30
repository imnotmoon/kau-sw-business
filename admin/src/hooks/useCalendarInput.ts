import React, { useState, useEffect } from 'react'

import { LINKS } from '../components/calendars/links';
import { Schedule } from '../interfaces';
import { CATEGORY_MAP_REVERSE } from '../components/calendars/ScheduleItem';

export interface ICalendarForm {
  title: string,
  link: string,
  startDate: string,
  endDate: string,
  category: string,
}

const useCalendarInput = (edit : boolean, schedule: undefined | Schedule) => {
  const [calendarForm, setCalendarForm] = useState<ICalendarForm>({
    title: schedule ? schedule.title : '',
    link: schedule ? schedule.link : '',
    startDate: schedule ? schedule.startDate : '',
    endDate: schedule ? schedule.endDate : '',
    category: schedule ? CATEGORY_MAP_REVERSE[schedule.category] : 'SW 전공교육',
  });
  const [bigCategory, setBigCategory] = useState<undefined | string>();
  const [smallCategory, setSmallCategory] = useState<undefined | string>();

  const onChangeTitle = (e: React.FormEvent) => {
    if(!(e.target as HTMLInputElement).value) return;
    setCalendarForm({...calendarForm, title: (e.target as HTMLInputElement).value});
  } 

  const onChangeBigCategory = (e: React.MouseEvent) => {
    setBigCategory((e.target as HTMLDivElement).innerText.trim());
  }

  const onChangeSmallCategory = (e: React.MouseEvent) => {
    setSmallCategory((e.target as HTMLDivElement).innerText.trim());
  }

  useEffect(() => {
    if(!bigCategory || !smallCategory) return;
    setCalendarForm({ ...calendarForm, link: LINKS[bigCategory][smallCategory] });
  }, [smallCategory]);

  const onChangeStartDate = (e: React.FormEvent) => {
    const newStartDate = (e.target as HTMLInputElement).value;
    if(!calendarForm.endDate) {
      setCalendarForm({ ...calendarForm, startDate: newStartDate });
    } else {
      if(calendarForm.endDate >= newStartDate) setCalendarForm({ ...calendarForm, startDate: newStartDate });
    }
  }

  const onChangeEndDate = (e: React.FormEvent) => {
    const newEndDate = (e.target as HTMLInputElement).value;
    if(!calendarForm.startDate) {
      setCalendarForm({ ...calendarForm, endDate : newEndDate });
    } else {
      if(calendarForm.startDate <= newEndDate) setCalendarForm({ ...calendarForm, endDate: newEndDate });
    }
  }

  const onChangeCategory = (e: React.MouseEvent) => {
    setCalendarForm({ ...calendarForm, category: (e.target as HTMLDivElement).innerText.trim() })
  }

  return {
    calendarForm,
    bigCategory,
    smallCategory,
    onChangeTitle,
    onChangeBigCategory,
    onChangeSmallCategory,
    onChangeStartDate,
    onChangeEndDate,
    onChangeCategory,
  }

}

export default useCalendarInput