import React from "react";
import styled from "@emotion/styled";

interface SideMenuProps {
	page: "notices" | "banners" | "calendars" | "accounts";
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
					<MenuItem key={idx} onClick={onClickMenu}>
						<div>{key}</div>
					</MenuItem>
				);
			})}
		</Container>
	);
};

const menus: Menus = {
	notices: { "새 공지사항 작성": "/notices/new", "공지사항 수정/삭제": "/notices/edit" },
	banners: { "배너 등록" : '/banners/new', "배너 수정/삭제" : '/banners/edit'},
	calendars: { "일정 등록" : '/calendars/new', "일정 수정/삭제" : '/calendars/edit'},
	accounts: { '계정 등록' : '/accounts/new', '계정 수정/삭제' : 'accounts/edit'}
};

const Container = styled.aside`
	height: 100%;
	top: 0px;
	left: 0px;
	width: 250px;
	background-color: rgba(255, 255, 255, 0.1);

	display: flex;
	flex-direction: column;
`;

const MenuItem = styled.div`
	padding-left: 30px;
	height: 60px;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		backdrop-filter: blur(100px);
	}

	& div {
		color: white;
	}
`;

export default SideMenu;
