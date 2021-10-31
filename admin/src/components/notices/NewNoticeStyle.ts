import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div:nth-of-type(1) {
		width: 90%;
		height: 70vh;
		border: 1px solid white;
		background: rgba(255, 255, 255, 0.7);
	}

	& > div:nth-of-type(2) {
		width: 90%;
		height: 10vh;
		display: flex;
		justify-content: flex-end;
	}
`;

export const Title = styled.h1`
	text-align: left;
	width: 90%;
	color: white;
	font-weight: 300;
	height: 50px;
	font-size: 24px;
	border-bottom: 1px solid white;
`;

export const Button = styled.button`
	margin-top: 30px;
	height: 50px;
	width: 150px;
	background: none;
	border: 1px solid white;
	border-radius: 5px;
	color: white;
	font-size: 16px;
	font-weight: 500;

	&:hover {
		border: 2px solid rgba(35, 221, 2, 0.6);
		color: rgba(35, 221, 2, 0.6);
	}
`;
