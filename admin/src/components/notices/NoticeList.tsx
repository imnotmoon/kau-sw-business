import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import APIs from "../../utils/networking";
import EditNotice from "./EditNotice";
import { NoticeDetail, NoticeSummary } from "../../interfaces";
import { COLORS } from "../../utils/styled";
import Confirm from "../Confirm";

const NoticeList = () => {
	const [notices, setNotices] = useState<NoticeSummary[]>([]);
	const [editing, setEditing] = useState<NoticeDetail | null>(null);
	const [modal, setModal] = useState({ show: false, idx: -1 });

	useEffect(() => {
		APIs.getNoticeSummary().then((result) => setNotices(result.data));
	}, [modal]);

	const onClickEdit = (idx: number) => {
		return async (e: React.MouseEvent) => {
			if(editing?.id === idx) {
				setEditing(null);
			} else {
				const result = await APIs.getNoticeDetail(idx);
				setEditing(result);
			}
		}
	}

	const onClickDelete = (id: number) => {
		return (e: React.MouseEvent) => {
			setModal({ show: true, idx: id })
		}
	}

	const closeModal = (e: React.MouseEvent) => {
		e.stopPropagation();
		setModal({ show: false, idx: -1});
	}

	const noticeGenerator = (item: NoticeSummary) => {
		return (
		<Notice >
			<div>
				<div>{item.title}</div>
				<ButtonWrapper>
					<Button onClick={onClickEdit(item.id)}>{editing?.id === item.id ? '취소' : '수정'}</Button>
					<Button onClick={onClickDelete(item.id)}>삭제</Button>
				</ButtonWrapper>
			</div>
		</Notice>);
	}

	return (
		<>
		<Container>
			<Title>공지사항 수정/삭제</Title>
			<Body>
				<List>
				{notices.map((item, idx: number) => (
					<div key={idx}>
					{noticeGenerator(item)}
					{editing?.id === item.id && <EditNotice content={editing} />}
					</div>
				))}
				</List>
			</Body>
		</Container>
		{modal.show && <Confirm idx={modal.idx} close={closeModal} API={APIs.deleteNotice}/>}
		</>
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
`;

const List = styled.div`
	overflow-y: scroll;
`;

const Notice = styled.div`
	height: 50px;
	width: 100%;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: content-box;
	padding: 10px 0px;
	border-bottom: 1px solid ${COLORS.BORDER};

	& > div {
		width: 90%;
		display: grid;
		grid-template-columns: 4fr 1fr;
		align-items: center;
		justify-content: space-between;
	}

	&:hover {
		background-color: ${COLORS.BACKGROUND};
	}
`

const ButtonWrapper = styled.div`
	display: flex;
`

const Button = styled.button`
	width: 80px;
	height: 40px;
	border: 1px solid white;
	color: white;
	background: none;
	margin-left: 5px;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${COLORS.LIGHTBLUE};
		transition: all 0.3s ease;
	}
`

export default NoticeList;
