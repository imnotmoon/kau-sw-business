import React from "react";
import styled from "@emotion/styled";

import Menus from "./Menus";
import { COLORS } from "../utils/styled";
import logo from "../logo_01.png";

const Header = () => {
	return (
		<Container>
			<div>
				<img src={logo} alt="logo" />
				<Menus />
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 80px;
	background: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(50px);
	border-bottom: 1px solid ${COLORS.BORDER};

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		height: 100%;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	& img {
		height: 40%;
	}
`;

export default Header;
