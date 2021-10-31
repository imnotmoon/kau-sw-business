import React from "react";
import styled from "@emotion/styled";

interface SideMenuProps {
	page: "notices";
	currentPage: string;
	setDetailMenu: React.Dispatch<string>;
}
interface Menus {
	[path: string]: { [name: string]: string };
}

const SideMenu = ({ page, currentPage, setDetailMenu }: SideMenuProps) => {
	const onClickMenu = (e: React.MouseEvent) => {
		const menuName = (e.target as HTMLElement).innerText;
		setDetailMenu(menuName);
	};

	return (
		<Container>
			{Object.keys(menus[page]).map((key, idx: number) => {
				return (
					<MenuItem key={idx}>
						<div onClick={onClickMenu}>{key}</div>
					</MenuItem>
				);
			})}
		</Container>
	);
};

const menus: Menus = {
	notices: { "새 공지사항 작성": "/notices/new", "공지사항 수정/삭제": "/notices/edit" },
};

const Container = styled.div`
	position: absolute;
	height: 100%;
	top: 0px;
	left: 0px;
	width: 250px;
	padding: 30px 0px;

	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(50px);

	display: flex;
	flex-direction: column;
`;

const MenuItem = styled.div`
	padding-left: 30px;
	height: 60px;
	display: flex;
	align-items: center;

	&:hover {
		backdrop-filter: blur(100px);
	}

	& div {
		color: white;
	}
`;

export default SideMenu;
