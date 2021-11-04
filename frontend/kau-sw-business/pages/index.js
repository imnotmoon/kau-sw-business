import React from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import withHead from "../components/hoc/withHead";
import Board from "../components/Board";
import { COLORS } from "../styles/theme";
import axios from "axios";

const Home = ({ notiData, newsData, bannerData }) => {
  return (
    <Container>
      <Carousel bannerData={bannerData} style={{ height: "380px" }} />
      <Board {...{ notiData, newsData }} />
    </Container>
  );
};

export const getServerSideProps = async () => {
  const {
    data: { data: notiData },
  } = await axios.get(
    `${process.env.API_BASE_URL}/notice/summary?category=notice&count=4`
  );
  const {
    data: { data: newsData },
  } = await axios.get(
    `${process.env.API_BASE_URL}/notice/summary?category=news&count=4`
  );
  const {
    data: { data: bannerData },
  } = await axios.get(`${process.env.API_BASE_URL}/banner/summary`);
  return { props: { notiData, newsData, bannerData } };
};

const Container = styled.div`
  position: relative;
  top: 80px;
  background: ${COLORS.BACKGROUND};
`;

export default withHead(Home, "");
