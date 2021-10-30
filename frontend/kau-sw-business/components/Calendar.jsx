import React from 'react';
import styled from 'styled-components';

const Calendar = ({ rowNames, data }) => {
  return (
    <Table>
      <th>
        {MONTHS.map((month) => (
          <td>{month}</td>
        ))}
      </th>
    </Table>
  );
};

const Table = styled.table``;

const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

export default Calendar;
