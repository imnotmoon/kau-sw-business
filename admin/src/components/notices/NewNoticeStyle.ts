import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div:nth-of-type(3) {
		width: 90%;
		height: 50vh;
		border: 1px solid white;
		background: rgba(255, 255, 255, 0.7);
	}

	& > div:nth-of-type(5) {
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
	margin-left: 30px;

	&:hover {
		border: 2px solid rgba(35, 221, 2, 0.6);
		color: rgba(35, 221, 2, 0.6);
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
	margin: 10px 0;

	& > input {
		width: 0px;
		height: 0px;
		position: absolute;
		visibility: hidden;
	}

	& > button {
		height: 100%;
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