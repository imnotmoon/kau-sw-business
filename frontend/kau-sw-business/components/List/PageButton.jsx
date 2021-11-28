import React, { useMemo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { COLORS } from "../../styles/theme";

const MAX_PAGE = 5;

function List({ pageMap }) {
  const router = useRouter();
  const startNum = useMemo(
    () => Math.floor((parseInt(pageMap.pageNo) - 1) / MAX_PAGE) * MAX_PAGE,
    [pageMap]
  );
  return (
    <Wrapper>
      {startNum > 0 && <PageNumButton onClick={() => router.push(
              {
                query: { page: 1 + startNum - MAX_PAGE },
              },
              undefined,
              { scroll: false }
            )}>◁</PageNumButton>}
      {Array(Math.min(pageMap.totalNumberOfPages, startNum + MAX_PAGE)-startNum)
        .fill()
        .map((_, idx) => (
          <PageNumButton
            key={idx}
            onClick={() =>
              router.push(
                {
                  query: { page: 1 + startNum + idx },
                },
                undefined,
                { scroll: false }
              )
            }
            selected={parseInt(pageMap.pageNo) === 1 + startNum + idx}
          >
            {1 + startNum + idx}
          </PageNumButton>
        ))}
      {startNum + MAX_PAGE < pageMap.totalNumberOfPages && (
        <PageNumButton
          onClick={() =>
            router.push(
              {
                query: { page: 1 + startNum + MAX_PAGE },
              },
              undefined,
              { scroll: false }
            )
          }
        >
          ▷
        </PageNumButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const PageNumButton = styled.button`
  width: 30px;
  height: 25px;
  border: none;
  color: ${({ selected }) => (selected ? COLORS.TEXT : COLORS.PRIMARY1)};
  cursor: pointer;
  background-color: ${({selected}) => selected ? COLORS.PRIMARY1 : 'none'};

  &:hover {
    background-color: ${({ selected }) =>
    selected ? COLORS.PRIMARY1 : COLORS.TEXT};
  }
`;

export default List;
