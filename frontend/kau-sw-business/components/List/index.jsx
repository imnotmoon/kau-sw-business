import React from "react";
import styled from "styled-components";

import { COLORS } from "../../styles/theme";
import Table from "./Table";
import PageButton from "./PageButton";

function List({ data, pageMap }) {
  return (
    <>
      <Total>
        Total {pageMap.total}건 {pageMap.pageNo} 페이지
      </Total>
      <Table data={data} pageMap={pageMap} />
      <PageButton pageMap={pageMap} />
    </>
  );
}

const Total = styled.div`
  margin: 0 0 20px 10px;
`

export default List;
