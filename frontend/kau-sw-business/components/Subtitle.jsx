import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/theme";

const Subtitle = ({ text }) => {
	return (
		<Container>
			<Bullet />
			<div>{text}</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: top;
	margin-bottom: 15px;

	& > div:nth-of-type(2) {
		font-weight: 500;
		color: ${COLORS.PRIMARY1};
		font-size: 20px;
	}
`;

const Bullet = styled.div`
	width: 10px;
	height: 20px;
	background: ${COLORS.PRIMARY1};
	margin-left: 5px;
	margin-right: 10px;
	margin-top: 6px;
`;

export default Subtitle;
