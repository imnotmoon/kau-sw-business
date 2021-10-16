import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { MenuItems } from "../utils/MenuInterface";
import { COLORS } from "../styles/theme";
import useToggleDetailMenu from "../hooks/useToggleDetailMenu";

import logo from "../public/img/logo_01.png";

const Menu = () => {
	const { dropdownRef, onMouseEnterMenu, onMouseLeaveMenu, buildDetailMenu } = useToggleDetailMenu();
	const [selectedMenu, setSelectedMenu] = useState("사업단 소개");

	const onFocusSignleMenu = useCallback((e) => {
		const menuName = e.target.innerText.trim();
		setSelectedMenu(menuName);
	}, []);

	return (
		<>
			<Container>
				<div>
					<Image src={logo} width={205} height={36} alt="logo" />
					<MenuEntry onMouseEnter={onMouseEnterMenu} length={MenuItems.length}>
						{MenuItems.map((item, idx) => (
							<MenuLink key={idx} onMouseEnter={onFocusSignleMenu}>
								<Link href={MenuItems[idx].url}>
									<a style={{ color: selectedMenu === item.title ? "white" : "#e2e2e2" }}>
										{item.title}
									</a>
								</Link>
							</MenuLink>
						))}
					</MenuEntry>
				</div>
			</Container>
			<DetailMenu ref={dropdownRef} onMouseLeave={onMouseLeaveMenu} length={MenuItems.length}>
				{buildDetailMenu(selectedMenu)}
			</DetailMenu>
		</>
	);
};

const Container = styled.div`
	background-color: ${COLORS.PRIMARY1};
	width: 100vw;
	height: 80px;

	position: absolute;
	top: 0px;
	left: 0px;

	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 300;

	& > div {
		width: 80%;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: space-between;
	}
`;

const MenuEntry = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props) => props.length}, 120px);
	height: 100%;
	gap: 2vw;
	z-index: 300;

	& > div {
		display: flex;
		justify-content: center;
		padding-top: 30px;
		height: 100%;

		&:hover {
			padding-top: 27px;
			border-top: 3px solid white;
		}
	}
`;

const MenuLink = styled.div`
	white-space: nowrap;
	align-self: center;
`;

const DetailMenu = styled.div`
	position: absolute;
	top: -200px;
	width: 100%;
	height: 200px;
	background-color: ${COLORS.MENU_DROPDOWN};
	transition: top 0.3s ease;

	display: flex;
	justify-content: flex-end;
	margin-right: 10vw;
	z-index: 200;

	& > div {
		position: relative;
		right: 10vw;
		width: calc(600px + 8vw);
		display: grid;
		grid-template-columns: repeat(${(props) => props.length}, 120px);
		gap: 2vw;
	}
`;

export default Menu;
