import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function MainPage() {
	const history = useHistory();
	if (!sessionStorage.getItem("token")) history.push("/login");
	return <div></div>;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default MainPage;
