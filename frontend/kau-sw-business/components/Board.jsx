import React from "react";
import styled from "styled-components";

import { COLORS } from "../styles/theme";
import HeadlineCard from "./HeadlineCard";
import { HomeCalendarItems } from "../utils/MenuInterface";
import NewsCard from "./NewsCard";

function Board({ notiData, newsData }) {
  return (
    <Container>
      <Title>
        <span>KAU</span> HEADLINE
      </Title>
      <Section>
        <HeadlineCard
          data={notiData}
          title="공지사항"
          src="/community/notice"
        ></HeadlineCard>
        <HeadlineCard
          data={newsData}
          title="사업단소식"
          src="/community/news"
        ></HeadlineCard>
      </Section>
      <SectionCalendar>
        {HomeCalendarItems.map((data, idx) => (
          <NewsCard key={idx} data={data} />
        ))}
      </SectionCalendar>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${COLORS.BACKGROUND};
  position: relative;
  top: -130px;
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 50px;
  font-weight: 400;
  font-size: 30px;

  & > span {
    color: ${COLORS.PRIMARY1};
    font-weight: 500;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 30px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const SectionCalendar = styled(Section)`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Board;
