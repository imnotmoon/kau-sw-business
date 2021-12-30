import React, { useState, useEffect, useRef } from 'react';

interface ISelectedDates {
  startDate: Date,
  endDate: Date,
}

const useCalendar = () => {
  const [startDate, setStartDate] = useState<undefined | Date>()
  const [endDate, setEndDate] = useState<undefined | Date>()

  const selectedDates = useRef<undefined | ISelectedDates>();

  const onClickDate = (e: React.MouseEvent) => {

  }

  useEffect(() => {
    if(selectedDates.current) {

    } else {
      setStartDate(new Date());
    }
  }, []);

  return {startDate, endDate, onClickDate}
}

export default useCalendar;