import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Menus = () => {
	const history = useHistory();
	const [logout, setLogout] = useState(false);

	const onMouseEnterProfile = (e: React.MouseEvent) => {
		setLogout(true);
		(e.target as HTMLDivElement).style.color = "red";
	};

	const onMouseLeaveProfile = (e: React.MouseEvent) => {
		setLogout(false);
		(e.target as HTMLDivElement).style.color = "white";
	};

	const onClickProfile = () => {
		sessionStorage.clear();
		history.push("/login");
	};

	return (
		<Container>
			{menuItems.map(({ menu, href }, idx) => {
				return (
					<div key={idx}>
						<NavLink to={href} activeStyle={activeStyle}>
							{menu}
						</NavLink>
					</div>
				);
			})}
			<div onMouseEnter={onMouseEnterProfile} onMouseLeave={onMouseLeaveProfile} onClick={onClickProfile}>
				{logout ? "로그아웃" : sessionStorage.getItem("username") || "admin"}
			</div>
		</Container>
	);
};

const activeStyle = {
	background: "rgba(255, 255, 255, 0.1)",
	borderBottom: "1px solid white",
};

const Container = styled.div`
	display: flex;

	& > div {
		width: 150px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	& a {
		text-decoration: none;
		color: white;
		font-weight: 400;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			border-bottom: 1px solid grey;
		}
	}
`;

const menuItems = [
	{ menu: "공지관리", href: "/notices" },
	{ menu: "배너관리", href: "/banners" },
	{ menu: "캘린더관리", href: "/calendars" },
	{ menu: "계정관리", href: "/accounts" },
];

export default Menus;
