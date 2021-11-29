import React from "react";
import axios from "axios";
import moment from "moment";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const Calendar = () => {
  return <ContentFrame title="캘린더" state={4}></ContentFrame>;
};

export const getServerSideProps = async () => {
  // 현재 연도 일정 조회
  const today = moment();
  const startDate = today.startOf("year").format("YYYY-MM-DD");
  const endDate = today.endOf("year").format("YYYY-MM-DD");
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/schedule?category=influences&from=${startDate}&to=${endDate}&type=duration`
  );
  // 캘린더 테이블에 들어가는 순서 정하기 위해 하나씩 확인
  const scheduleTable = {};
  let maxIndex = 0;
  data.data.forEach((row) => {
    // 스케줄 시작 월, 종료 월
    const from = moment(row.startDate).startOf("month");
    const to = moment(row.endDate).endOf("month");
    let index = 0; // 캘린더에서 row 순서
    while (true) {
      if (!scheduleTable[index]) scheduleTable[index] = new Array(12).fill(null);
      const isAvailable = new Array(to.month() - from.month() + 1)
        .fill(0)
        .every((_, idx) => {
          return !scheduleTable[index][from.month() + idx]}
          );
      if (isAvailable) {
        new Array(to.month() - from.month() + 1)
        .fill(0)
        .forEach((_, idx) => scheduleTable[index][from.month() + idx] = row);
        maxIndex = Math.max(maxIndex, index);
        break;
      }
      index++;
    }
  });
  return { props: { ...data, scheduleTable, maxIndex } };
};

export default withHead(Calendar);
