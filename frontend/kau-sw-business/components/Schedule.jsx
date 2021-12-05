import React from "react";
import styled from "styled-components";
import moment from "moment";
import { COLORS } from "../styles/theme";

const Schedule = ({ scheduleList, scheduleTable, maxIndex }) => {
  moment.locale("ko", {
    weekdays: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
  });
  return (
    <Wrapper>
      <Table>
        <tbody>
          {scheduleList.map((schedule) => (
            <TableRow key={schedule.id}>
              <TableData width="fit-content">
                {moment(schedule.startDate).format("YYYY.MM.DD(ddd)")}
                {(schedule.startDate !== schedule.endDate) && 
                ` ~ ${moment(schedule.endDate).format("YYYY.MM.DD(ddd)")}`}
              </TableData>
              <TableData width="70%">{schedule.title}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  color: ${COLORS.PRIMARY1};
`;

const Table = styled.table`
  margin: auto;
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  height: 55px;

  > td: first-child {
      background-color: ${COLORS.BACKGROUND};
      white-space: nowrap;
  }
`;

const TableData = styled.td`
  text-align: left;
  width: ${({ width = "200px" }) => width};
  padding: 0 10px;
  border-top: 1px solid ${COLORS.PRIMARY1};
  border-bottom: 1px solid ${COLORS.PRIMARY1};
  word-break: keep-all;
`;

export default Schedule;
