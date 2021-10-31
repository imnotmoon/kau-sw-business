import React from "react";
import styled from "@emotion/styled";

import Header from "./Header";

interface LayoutProp {
	children: React.ReactNode;
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
	width: 100vw;
	height: calc(100vh - 80px);
	position: relative;
	display: flex;
`;

export default Layout;
