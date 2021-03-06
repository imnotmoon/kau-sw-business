import React from "react";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../styles/theme";

const Calendar = ({ scheduleTable, maxIndex }) => {
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
            const doneList = new Set();
            return (
              <TableRow key={index}>
                {scheduleTable[index].map((schedule, idx) => {
                  if (!schedule) return <TableData key={idx} />;
                  if (doneList.has(schedule.id)) return;

                  const colSpan =
                    moment(schedule.endDate).month() -
                    moment(schedule.startDate).month() +
                    1;
                  doneList.add(schedule.id);
                  return (
                    <TableData key={idx} colSpan={colSpan} backgroundColor={COLORS.BACKGROUND}>
                      {schedule.title}
                    </TableData>
                  );
                })}
              </TableRow>
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
  color: ${COLORS.PRIMARY1};
`;

const TableHeadColumn = styled.th`
  min-width: 100px;
  border: 1px solid ${COLORS.PRIMARY1};
`;

const TableRow = styled.tr`
  height: 75px;
`;

const TableData = styled.td`
  border: 1px solid ${COLORS.PRIMARY1};
  text-align: center;
  word-break: keep-all;
  background-color: ${({ backgroundColor = "transparent" }) =>
    backgroundColor};
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
