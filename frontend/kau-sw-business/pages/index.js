import React from "react";
import Carousel from "../components/Carousel";
import styled from "styled-components";

import withHead from "../components/hoc/withHead";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	return (
		<Container>
			<Carousel style={{ height: "380px" }} />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	top: 80px;
`;

export default withHead(Home, "");
