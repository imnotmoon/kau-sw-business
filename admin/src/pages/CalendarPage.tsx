import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import NewCalendar from "../components/calendars/NewCalendar";
import EditCalendar from "../components/calendars/EditCalendar";
import Toast from "../components/Toast";
import useToast from "../utils/toastStore";

const CalendarPage = () => {
	const [toast] = useToast();
	const [detailMenu, setDetailMenu] = useState('일정 등록');

	return (
		<Layout>
			<SideMenu page="calendars" currentPage={detailMenu} setDetailMenu={setDetailMenu}/>
			<Body>
				{detailMenu === '일정 등록' ? <NewCalendar edit={false} /> : <EditCalendar />}
				{toast.show && <Toast />}
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

export default CalendarPage;
