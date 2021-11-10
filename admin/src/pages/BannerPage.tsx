import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import NewBanner from "../components/banners/NewBanner";
import DeleteBanner from "../components/banners/DeleteBanner";

const BannerPage = () => {
	const [detailMenu, setDetailMenu] = useState('배너 등록');
	return (
		<Layout>
			<SideMenu page="banners" currentPage={detailMenu} setDetailMenu={setDetailMenu} />
			<Body>{detailMenu === '배너 등록' ? <NewBanner /> : <DeleteBanner /> }</Body>
		</Layout>
	);
};

const Body = styled.section`
	width: calc(100vw - 250px);
	height: 100%;
	display: flex;
	justify-content: center;
`;

export default BannerPage;
