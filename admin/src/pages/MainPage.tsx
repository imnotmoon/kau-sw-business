import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function MainPage() {
	const history = useHistory();
	if (!sessionStorage.getItem("token")) history.push("/login");

	return <Container>로그인 성공 : 메인페이지입니다.</Container>;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
`;

export default MainPage;
