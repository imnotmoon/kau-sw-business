import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/theme";

const NewsCard = ({ data }) => {
  const { title, url } = data;
  return (
    <Container>
      <Title>
        <div>{title}</div>
        <div>연간캘린더</div>
      </Title>
      <LinkButton>
        <Link href={url}>바로가기</Link>
      </LinkButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  min-width: 250px;
  background-color: ${COLORS.BACKGROUND};
  height: 200px;
  border: 1px solid ${COLORS.CARD_BORDER};
  color: ${COLORS.TEXT2};
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.TITLE};
  font-size: 22px;
  font-weight: 400;
`;

const LinkButton = styled.div`
  margin-top: 8px;
  border: 1px solid ${COLORS.TEXT2};
  padding: 5px 20px;
  cursor: pointer;
`;

export default NewsCard;
