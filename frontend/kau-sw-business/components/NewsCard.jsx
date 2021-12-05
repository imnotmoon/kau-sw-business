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
  background-color: ${COLORS.PRIMARY1};
  height: 200px;
  border: 1px solid ${COLORS.PRIMARY1};
  color: ${COLORS.BORDER};
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.BORDER};
  font-size: 22px;
  font-weight: 400;
`;

const LinkButton = styled.div`
  margin-top: 20px;
  border: 1px solid ${COLORS.BORDER};
  padding: 5px 20px;
  cursor: pointer;
`;

export default NewsCard;
