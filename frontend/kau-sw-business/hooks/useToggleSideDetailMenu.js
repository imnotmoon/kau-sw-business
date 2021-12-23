import { useRef, useState } from "react";
import { MenuItems } from "../utils/MenuInterface";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/theme";

const useToggleSideDetailMenu = () => {
	const [selectedMenu, setSelectedMenu] = useState();
	const sidebarRef = useRef();

	const onClickMenuButton = (e) => {
		if (sidebarRef.current) sidebarRef.current.style.right = "0px";
	};

	const onClickCloseButton = (e) => {
		if (sidebarRef.current) sidebarRef.current.style.right = "-325px";
	};

	const buildSideDetailMenu = () => {
		return (
			<div>
				{MenuItems.map((item, idx) => {
					return (
						<DetailMenuItem key={idx}>
							<Title isOpen={selectedMenu === item.title} onClick={() => setSelectedMenu(item.title)}>
								{item.title}
							</Title>
							{selectedMenu == item.title &&
								item.subElements.map((elem) => (
									<Item key={elem.title}>
										<Link href={elem.url}>{elem.title}</Link>
									</Item>
								))}
						</DetailMenuItem>
					);
				})}
			</div>
		);
	};

	return {
		sidebarRef,
		onClickMenuButton,
		onClickCloseButton,
		buildSideDetailMenu,
	};
};

const DetailMenuItem = styled.div``;

const Title = styled.div`
	display: flex;
	align-items: center;
	padding: 0 20px;
	height: 50px;
	background-color: ${({ isOpen }) => (isOpen ? COLORS.PRIMARY1 : "")};
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	color: ${({ isOpen }) => (isOpen ? COLORS.BACKGROUND : COLORS.PRIMARY1)};
	font-size: 20px;
	font-weight: 400;
	cursor: pointer;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	padding: 0 25px;
	height: 50px;
	background-color: rgba(120, 120, 120, 0.5);
	color: rgb(40, 40, 40);
	font-size: 18px;
	font-weight: 400;

	> a {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
`;

export default useToggleSideDetailMenu;
