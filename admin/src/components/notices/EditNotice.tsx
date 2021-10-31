import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import APIs from "../../utils/networking";
import { NoticeSummary } from "../../interfaces";

const EditNotice = () => {
	const [notices, setNotices] = useState<NoticeSummary[]>([]);

	useEffect(() => {
		APIs.getNoticeSummary().then((result) => setNotices(result.data));
	}, []);

	return (
		<Container>
			<Title>공지사항 수정/삭제</Title>
			<Body>
				{notices.map((item, idx: number) => (
					<div key={idx}>{item.title}</div>
				))}
			</Body>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	text-align: left;
	width: 90%;
	color: white;
	font-weight: 300;
	height: 50px;
	font-size: 24px;
	border-bottom: 1px solid white;
`;

const Body = styled.div`
	width: 90%;

	& > div {
		height: 50px;
		width: 100%;
		color: white;
	}
`;

export default EditNotice;
