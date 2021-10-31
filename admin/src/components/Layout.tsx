import React from "react";
import styled from "@emotion/styled";

import Header from "./Header";

interface LayoutProp {
	children: React.ReactChild;
}

const Layout = ({ children }: LayoutProp) => {
	return (
		<Container>
			<Header />
			<Body>{children}</Body>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Body = styled.div`
	margin-top: 30px;
	width: 90vw;
	height: calc(100vh - 140px);
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	backdrop-filter: blur(50px);
`;

export default Layout;
