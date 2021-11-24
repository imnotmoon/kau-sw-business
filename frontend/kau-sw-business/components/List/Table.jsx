import React from "react";
import { useRouter } from "next/router";
import moment from "moment";
import styled from "styled-components";

import { COLORS } from "../../styles/theme";

function Table({ data, pageMap }) {
  const router = useRouter();
  return (
    <CustomTable>
      <thead>
        <TableHead>
          <TableHeadColumn minWidth="50px" width="50px">
            번호
          </TableHeadColumn>
          <TableHeadColumn width="auto">제목</TableHeadColumn>
          <TableHeadColumn minWidth="90px" width="150px">
            글쓴이
          </TableHeadColumn>
          <TableHeadColumn width="50px">조회</TableHeadColumn>
          <TableHeadColumn minWidth="100px" width="100px">
            날짜
          </TableHeadColumn>
        </TableHead>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={row.id}>
            <TableData>
              {pageMap.total -
                pageMap.rowsPerPage * (pageMap.pageNo - 1) -
                index}
            </TableData>
            <TableData
              textAlign="left"
              cursor="pointer"
              onClick={() => router.push(`${router.pathname}/${row.id}`)}
            >
              {row.title}
            </TableData>
            <TableData>{row.writer}</TableData>
            <TableData>{row.viewCount}</TableData>
            <TableData>{moment(row.createdAt).format("YYYY-MM-DD")}</TableData>
          </TableRow>
        ))}
      </tbody>
    </CustomTable>
  );
}

const CustomTable = styled.table`
  border-collapse: collapse;
`;

const TableHead = styled.tr`
  height: 40px;
  border-top: 2px solid ${COLORS.PRIMARY1};
  border-bottom: 0.2px solid ${COLORS.TEXT};
`;

const TableHeadColumn = styled.th`
  min-width: ${({ minWidth = "50px" }) => minWidth};
  width: ${({ width = "100px" }) => width};
`;

const TableRow = styled.tr`
  height: 40px;
  border-bottom: 0.2px solid ${COLORS.TEXT};
  font-weight: normal;
`;

const TableData = styled.td`
  text-align: ${({ textAlign = "center" }) => textAlign};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: ${({ cursor = "default" }) => cursor};
`;
export default Table;
