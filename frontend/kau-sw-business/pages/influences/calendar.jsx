import React from "react";
import axios from "axios";
import moment from "moment";

import { generateScheduleTable } from "../../utils/ScheduleTableGenerator";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";
import CalendarLayout from "../../components/Calendar";
import ScheduleLayout from "../../components/Schedule";

const Calendar = (props) => {
  return (
    <ContentFrame title="캘린더" state={4}>
      <CalendarLayout {...props} />
      <ScheduleLayout {...props} />
    </ContentFrame>
  );
};

export const getServerSideProps = async () => {
  // 현재 연도 일정 조회
  const today = moment();
  const startDate = today.startOf("year").format("YYYY-MM-DD");
  const endDate = today.endOf("year").format("YYYY-MM-DD");

  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/schedule?category=influences&from=${startDate}&to=${endDate}`
  );

  const { scheduleTable, maxIndex } = generateScheduleTable(data.data);
  return { props: { scheduleTable, maxIndex, scheduleList: data.data } };
};

export default withHead(Calendar);
