import React from "react";
import styled from "styled-components";

import LeftBox from "./LeftBox";
import { MenuItems } from "../utils/MenuInterface";
import withHead from "./hoc/withHead";

const ContentFrame = ({ title, state, children }) => {
	const front = MenuItems[state].title;

	return (
		<>
			<FrontImage>
				<span>{front}</span>
			</FrontImage>
			<Container>
				<LeftBox front={front} title={title} state={state} />
				<div>
					<div>{title}</div>
					{children}
				</div>
			</Container>
		</>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: top;

	& > div:nth-of-type(2) {
		padding-left: 40px;
		padding-right: 40px;
		width: 55vw;
		min-width: 800px;
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;

		& > div:nth-of-type(1) {
			border-bottom: 1px solid black;
			height: 70px;
			font-size: 24px;
			line-height: 80px;
			margin-bottom: 30px;
		}
	}
`;

const FrontImage = styled.div`
	background: url(/img/banner.jpg);
	height: 454px;
	display: flex;
	align-items: center;
	justify-content: center;

	& > span {
		color: white;
		font-size: 50px;
		font-weight: 300;
		letter-spacing: 7px;
	}
`;

export default withHead(ContentFrame, "");
