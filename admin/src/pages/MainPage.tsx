import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "../components/Header";
import BodyFrame from "../components/BodyFrame";

function MainPage() {
	const history = useHistory();
	if (!sessionStorage.getItem("token")) history.push("/login");

	return (
		<Container>
			<Header></Header>
			<BodyFrame>
				<div></div>
			</BodyFrame>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default MainPage;
