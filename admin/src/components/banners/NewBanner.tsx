import React from "react";
import styled from "@emotion/styled";
import { Title } from "../notices/NewNoticeStyle";
import BannerUploader from "./BannerUploader";

const NewBanner = () => {
	return (
		<Container>
			<Title>배너 등록</Title>
			<BannerUploader />
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default NewBanner;
