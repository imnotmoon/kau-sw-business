import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import NewNotice from "../components/notices/NewNotice";
import NoticeList from "../components/notices/NoticeList";
import Toast from "../components/Toast";
import useToast from "../utils/toastStore";

const NoticePage = () => {
	const [detailMenu, setDetailMenu] = useState("새 공지사항 작성");
	const [toast] = useToast();
	return (
		<Layout>
			<SideMenu page="notices" currentPage={detailMenu} setDetailMenu={setDetailMenu} />
			<Body>
				{detailMenu === "새 공지사항 작성" ? <NewNotice /> : <NoticeList />}
				{ toast.show && <Toast /> }
			</Body>
		</Layout>
	);
};

const Body = styled.section`
	width: calc(100vw - 250px);
	height: 100%;
	display: flex;
	justify-content: center;
`;

export default NoticePage;
