import React, { useState, useEffect } from 'react'
import { LINKS } from '../components/calendars/links';

interface ICalendarForm {
  title?: string,
  link?: string,
  startDate?: Date,
  endDate?: Date,
}

const useCalendarInput = () => {
  const [calendarForm, setCalendarForm] = useState<ICalendarForm>({
  });
  const [bigCategory, setBigCategory] = useState<undefined | string>();
  const [smallCategory, setSmallCategory] = useState<undefined | string>();

  const onChangeTitle = (e: React.FormEvent) => {
    if(!(e.target as HTMLInputElement).value) return;
    setCalendarForm({...calendarForm, title: (e.target as HTMLInputElement).value});
  } 

  const onChangeBigCategory = (e: React.MouseEvent) => {
    console.log((e.target as HTMLDivElement).innerText)
    setBigCategory((e.target as HTMLDivElement).innerText.trim());
  }

  const onChangeSmallCategory = (e: React.MouseEvent) => {
    console.log((e.target as HTMLDivElement).innerText)
    setSmallCategory((e.target as HTMLDivElement).innerText.trim());
  }

  useEffect(() => {
    if(!bigCategory || !smallCategory) return;
    setCalendarForm({ ...calendarForm, link: LINKS[bigCategory][smallCategory] });
  }, [smallCategory]);

  const onChangeStartDate = (e: React.FormEvent) => {

  }

  const onChangeEndDate = (e: React.FormEvent) => {

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
  }

}

export default useCalendarInput