import { useRef, useState } from "react";
import { MenuItems } from "../utils/MenuInterface";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../styles/theme";

const useToggleDetailMenu = () => {
	const dropdownRef = useRef();

	const onMouseEnterMenu = (e) => {
		if (dropdownRef.current) dropdownRef.current.style.top = "80px";
	};

	const onMouseLeaveMenu = (e) => {
		if (dropdownRef.current) dropdownRef.current.style.top = "-200px";
	};

	const buildDetailMenu = (selectedMenu) => {
		return (
			<div>
				{MenuItems.map((item, idx) => {
					return (
						<DetailMenuItem
							key={idx}
							style={ item.title === selectedMenu ? { background: "rgba(0, 0, 0, 0.2)" } : {}}
						>
							{item.subElements.map((e, i) => {
								return (
									<div key={i}>
										<Link href={e.url}>{e.title}</Link>
									</div>
								);
							})}
						</DetailMenuItem>
					);
				})}
			</div>
		);
	};

	return { dropdownRef, onMouseLeaveMenu, onMouseEnterMenu, buildDetailMenu };
};

const DetailMenuItem = styled.div`
	text-align: center;
	color: ${COLORS.TEXT};
	padding-top: 10px;
	& > div {
		height: 30px;
	}

	& > div:hover {
		color: white;
	}
`;

export default useToggleDetailMenu;
