import moment from "moment";

export const generateScheduleTable = (schedules) => {
  // 캘린더 테이블에 들어가는 순서 정하기 위해 하나씩 확인
  const scheduleTable = {};
  let maxIndex = -1;
  schedules.forEach((row) => {
    // 스케줄 시작 월, 종료 월
    const from = moment(row.startDate).startOf("month");
    const to = moment(row.endDate).endOf("month");
    let index = 0; // 캘린더에서 row 순서
    while (true) {
      if (!scheduleTable[index])
        scheduleTable[index] = new Array(12).fill(null);
      const isAvailable = new Array(to.month() - from.month() + 1)
        .fill(0)
        .every((_, idx) => {
          return !scheduleTable[index][from.month() + idx];
        });
      if (isAvailable) {
        new Array(to.month() - from.month() + 1)
          .fill(0)
          .forEach(
            (_, idx) => (scheduleTable[index][from.month() + idx] = row)
          );
        maxIndex = Math.max(maxIndex, index);
        break;
      }
      index++;
    }
  });
  return { scheduleTable, maxIndex };
};
