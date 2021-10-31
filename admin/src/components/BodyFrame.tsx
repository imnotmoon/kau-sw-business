import React from "react";
import styled from "@emotion/styled";

interface BodyFrameProp {
	children: React.ReactChild;
}

const BodyFrame = ({ children }: BodyFrameProp) => {
	return <Container>{children}</Container>;
};

const Container = styled.section`
	margin-top: 30px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(20px);
	height: calc(100vh - 140px);
	border-radius: 20px;
	width: 90vw;
`;

export default BodyFrame;
