import React, { useState } from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";

const NoticePage = () => {
	const [detailMenu, setDetailMenu] = useState("새 공지사항 작성");
	return (
		<Layout>
			<SideMenu page="notices" currentPage={detailMenu} setDetailMenu={setDetailMenu} />
		</Layout>
	);
};

export default NoticePage;
