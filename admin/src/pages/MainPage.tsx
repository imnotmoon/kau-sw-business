import React from "react";
import { useHistory } from "react-router-dom";
// import styled from "@emotion/styled";

import Layout from "../components/Layout";

function MainPage() {
	const history = useHistory();
	if (!sessionStorage.getItem("token")) history.push("/login");

	return (
		<Layout>
			<div></div>
		</Layout>
	);
}

export default MainPage;
