import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import NewAccount from "../components/accounts/NewAccount";
import EditAccount from "../components/accounts/EditAccount";
import Toast from "../components/Toast";
import useToast from "../utils/toastStore";

const AccountPage = () => {
	const [detailMenu, setDetailMenu] = useState('계정 등록');
	const [toast] = useToast();
	return (
		<Layout>
			<SideMenu page="accounts" currentPage={detailMenu} setDetailMenu={setDetailMenu}></SideMenu>
			<Body>
				{detailMenu === '계정 등록' 
					? <NewAccount edit={false} /> 
					: <EditAccount />}
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

export default AccountPage;
