import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import NewAccount from "../components/accounts/NewAccount";
import DeleteAccount from "../components/accounts/DeleteAccount";
import EditAuthority from "../components/accounts/EditAuthority";

const AccountPage = () => {
	const [detailMenu, setDetailMenu] = useState('계정 등록');
	return (
		<Layout>
			<SideMenu page="accounts" currentPage={detailMenu} setDetailMenu={setDetailMenu}></SideMenu>
			<Body>
				{detailMenu === '계정 등록' 
					? <NewAccount /> 
					: detailMenu === '권한 관리' 
						? <EditAuthority /> 
						: <DeleteAccount />}
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
