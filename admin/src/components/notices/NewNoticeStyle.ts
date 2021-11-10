import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div:first-of-type {
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		align-items: center;
		& > div:nth-of-type(3) {
			width: 90%;
			height: 40vh;
			min-height: 300px;
			border: 1px solid white;
			background: rgba(255, 255, 255, 0.7);
		}
	
		& > div:nth-of-type(5) {
			width: 90%;
			height: 10vh;
			display: flex;
			justify-content: flex-end;
			margin-bottom: 30px;
		}
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
	margin-top: 20px;
	height: 50px;
	width: 150px;
	background: none;
	border: 1px solid white;
	border-radius: 5px;
	color: white;
	font-size: 16px;
	font-weight: 500;
	margin-left: 30px;
	transition: all 0.3s ease;

	&:hover {
		border: 1px solid rgba(85, 129, 179, 0.8);
		background-color: rgba(85, 129, 179, 0.8);
		transition: all 0.5s ease;
	}
`;

export const TitleInput = styled.div`
	width: 90%;
	height: 50px;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;

	& > span {
		color: white;
		font-family: 'Noto Sans KR';
		font-size: 18px;
		padding-left: 20px;
	}

	& > input {
		width: 85%;
		height: 30px;
		background: rgba(255, 255, 255, 0.3);
		border: 1px solid white;
		padding-left: 20px;
		font-size: 18px;

		&:focus {
			outline: none;
			background-color: rgba(255, 255, 255, 0.6);
			
		}
	}
`

export const FileUploader = styled.div`
	width: 90%;
	height: 50px;
	margin: 20px 0;

	& > input {
		width: 0px;
		height: 0px;
		position: absolute;
		visibility: hidden;
	}

	& > button {
		height: 50px;
		border: 1px solid white;
		background-color: rgba(255, 255, 255, 0.3);
		width: 100%;
		color: white;
		font-size: 18px;
		transition: all 0.5s ease;

		&:hover {
			background-color: rgba(255, 255, 255, 0.7);
			transition: all 0.3s ease;
		}
	}
`