import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Title = ({ text }) => {
	return (
		<Container>
			<Image src="/img/title_bullet.png" alt="" width={17} height={17} />
			<span>{text}</span>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10px;

	& > img {
		padding-right: 10px;
	}
	& > span {
		font-size: 22px;
		font-weight: 600;
		color: #333;
	}
`;

export default Title;
