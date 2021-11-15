import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { COLORS } from "../../styles/theme";

function List({ pageMap }) {
  const router = useRouter();
  return (
    <Wrapper>
      {Array(Math.min(pageMap.totalNumberOfPages, 10))
        .fill()
        .map((_, idx) => (
          <PageNumButton
            key={idx}
            onClick={() =>
              router.push({
                query: { page: 1 + Math.floor(pageMap.pageNo / 10) + idx },
              })
            }
            selected={
              parseInt(pageMap.pageNo) ===
              1 + Math.floor(pageMap.pageNo / 10) + idx
            }
          >
            {1 + Math.floor(pageMap.pageNo / 10) + idx}
          </PageNumButton>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNumButton = styled.button`
  width: 30px;
  height: 25px;
  border: 0.5px solid ${COLORS.PRIMARY1};
  color: ${({ selected }) => (selected ? COLORS.TEXT : COLORS.PRIMARY1)};
  background-color: ${({ selected }) =>
    selected ? COLORS.PRIMARY1 : COLORS.TEXT};
    cursor: pointer;
`;

export default List;
