import React, { useState } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router";

import { WDiv, COLORS } from "../utils/styled";
import APIs from "../utils/networking";

const LoginPage = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const onChangeId = (e: React.FormEvent<HTMLInputElement>) => {
		setId((e.target as HTMLInputElement).value);
	}

	const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword((e.target as HTMLInputElement).value);
	}

	const onSubmitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await APIs.login(id, password);
		sessionStorage.setItem('username', result.data.name);
		sessionStorage.setItem('token', result.token);
		history.push('/')
	}

	return (<Container>
		<Div>
			<img src="/images/login.png" alt="gretting_sunglass"/>
			<form onSubmit={onSubmitForm}>
				<Input>
					<b>ID</b>
					<input type='text' placeholder="아이디를 입력해주세요" value={id} onChange={onChangeId}/>
				</Input>
				<Input>
					<b>PASSWORD</b>
					<input type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword}/>
				</Input>
				<Button>LOG IN!</Button>
			</form>
		</Div>
	</Container>);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// background-image: url(/images/bg.png);
	// background-repeat: no-repeat;
	// background-size: 100% 100%;

	width: 100vw;
	height: 100vh;
`;

const Div = styled(WDiv)`
	width: 500px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items : center;
	flex-direction: column;

	& > img {
		width: 100px;
		height: 100px;
	}

	& > form {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items : center;
		justify-content: space-between;
	}
`

const Button = styled.button`
	width: 80px;
	height: 44px;
	margin-top: 50px;
	width: 70%;
	background-color: ${COLORS.BACKGROUND};
	border: 1px solid ${COLORS.BORDER};
	border-radius: 16px;
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);

	&:hover, active {
		background-color: rgba(35, 221, 2, 0.2);
	}
`

const Input = styled.div`
  display : grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  color: white;
  font-size: 18px;
  margin-top: 36px;

  & > input {
    color: black;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: none;
    border-radius: 8px;
    border: 1px solid ${COLORS.BORDER};
    height: 28px;
    padding-left: 10px;
  }
`

export default LoginPage;
