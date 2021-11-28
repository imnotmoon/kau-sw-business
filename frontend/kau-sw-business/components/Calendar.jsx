import React from "react";
import styled from "styled-components";
import moment from "moment";

const Calendar = ({ data, scheduleTable, maxIndex }) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {MONTHS.map((month) => (
              <TableHeadColumn key={month}>{month}</TableHeadColumn>
            ))}
          </tr>
        </thead>

        <tbody>
          {new Array(maxIndex + 1).fill(0).map((_, index) => {
            const doneList = [];
            return (
              <tr key={index}>
                {scheduleTable[index].map((schedule, idx) => {
                  if (!schedule) return <TableData key={idx} />;
                  if (doneList.includes(schedule.id)) return;

                  const colSpan =
                    moment(schedule.endDate).month() -
                    moment(schedule.startDate).month() +
                    1;
                  doneList.push(schedule.id);
                  return (
                    <TableData key={schedule.id} colSpan={colSpan}>
                      {schedule.title}
                    </TableData>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: scroll;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TableHeadColumn = styled.th`
  min-width: 100px;
  border: 1px solid;
`;

const TableData = styled.td`
  border: 1px solid;
  text-align: center;
  word-break: keep-all;
`;

const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export default Calendar;
