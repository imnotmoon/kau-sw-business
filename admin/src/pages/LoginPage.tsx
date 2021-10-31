import React, { useState } from "react";
import { useHistory } from "react-router";

import APIs from "../utils/networking";
import { Container, Div, Input, Button } from "./LoginPageStyle";

const LoginPage = () => {
	console.log("login page");
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const onChangeId = (e: React.FormEvent<HTMLInputElement>) => {
		setId((e.target as HTMLInputElement).value);
	};

	const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword((e.target as HTMLInputElement).value);
	};

	const onSubmitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await APIs.login(id, password);
		sessionStorage.setItem("username", result.data.name);
		sessionStorage.setItem("token", result.token);
		history.push("/");
	};

	return (
		<Container>
			<Div>
				<form onSubmit={onSubmitForm}>
					<Input>
						<b>ID</b>
						<input type="text" placeholder="아이디를 입력해주세요" value={id} onChange={onChangeId} />
					</Input>
					<Input>
						<b>PASSWORD</b>
						<input
							type="password"
							placeholder="비밀번호를 입력해주세요"
							value={password}
							onChange={onChangePassword}
						/>
					</Input>
					<Button>LOG IN!</Button>
				</form>
			</Div>
		</Container>
	);
};

export default LoginPage;
