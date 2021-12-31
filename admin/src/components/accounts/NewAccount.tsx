import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import useToast from '../../utils/toastStore';
import APIs from '../../utils/networking';
import { Account } from '../../interfaces';

interface INewAccount {
  edit: boolean;
  account?: Account;
}

const NewAccount = ({edit, account} : INewAccount) => {
  const [name, setName] = useState(account ? account.name : '');
  const [username, setUsername] = useState(account ? account.userId : '');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [_, setToast] = useToast();

  const onChangeName = (e: React.FormEvent) => {
    setName((e.target as HTMLInputElement).value);
  }

  const onChangeUsername = (e: React.FormEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  const onChangePassword = (e: React.FormEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  const onChangeRePassword = (e: React.FormEvent) => {
    setRePassword((e.target as HTMLInputElement).value);
  }

  const onClickDuplicationCheckButton = async (e: React.MouseEvent) => {
    const result = await APIs.getAllAccounts().then(res => res.data);
    if(result.find((account) => account.userId === username)) {
      setToast({show: true, content: '사용할 수 없는 id입니다.'});
    } else {
      setToast({show: true, content: '사용 가능한 id입니다.'});
    }
  }

  const validateId = () => {
    if(username.length === 0) return true;
    if(username.length < 6 || username.length > 15) return false;
    const regex = new RegExp(/[!@#$%^&*-+=\\'";:,.></]+/gi);
    return !regex.test(username);
  }

  const validatePassword = () => {
    if(password.length === 0) return true;
    if(password.length < 6 || password.length > 15) return false;
    return true;
  }

  const validateRePassword = () => {
    if(rePassword.length === 0) return true;
    if(rePassword.length < 6 || rePassword.length > 15) return false;
    if(password !== rePassword) return false;
    return true;
  }

  const onClickSubmit = async () => {
    if(!validateId() || !validatePassword() || !validateRePassword() 
      || !username.length || !password.length || !rePassword.length) {
      setToast({show: true, content: `계정 ${edit ? '수정' : '등록'}에 실패했습니다.`});
      return;
    }
    const newAccount = {
      userId: username,
      password,
      name
    };

    if(edit) (newAccount as Account).id = `${account!.id}`;

    const api = edit ? APIs.putAccount : APIs.postNewAccount;

    const result = await api(newAccount);
    if(result.success) {
      setToast({show: true, content: `계정 ${edit ? '수정' : '등록'}에 성공했습니다.`})
    } else {
      setToast({show: true, content: `계정 ${edit ? '수정' : '등록'}에 실패했습니다.`});
    }
  }

  return (
    <Container>
      <Title>계정 {edit ? '수정' : '등록'}</Title>
      <Form>
        <div>
          <span>이름</span>
          <input type="text" value={name} onChange={onChangeName} />
          <div></div>
        </div>
        <div>
          <span>ID</span>
          <FormId>
            <input type="text" value={username} onChange={onChangeUsername} />
            <button onClick={onClickDuplicationCheckButton}>중복 확인</button>
          </FormId>
          <ValidateInput>{!validateId() && '사용할 수 없는 ID입니다.'}</ValidateInput>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" value={password} onChange={onChangePassword} />
          <ValidateInput>{!validatePassword() && '사용할 수 없는 비밀번호입니다.'}</ValidateInput>
        </div>
        <div>
          <span>비밀번호 재입력</span>
          <input type="password" value={rePassword} onChange={onChangeRePassword} />
          <ValidateInput>{!validateRePassword() && '잘못된 비밀번호 재입력입니다.'}</ValidateInput>
        </div>
        <section>
          <Button onClick={onClickSubmit}>{edit ? '수정' : '등록'}</Button>
        </section>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`

const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  font-size: 18px;

  & > div {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    align-items: center;
    gap: 30px;
  }

  & > section {
    align-self: end;
  }

  & input {
    height: 35px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid white;
    padding-left: 10px;
    font-size: 18px;
    color: white;

    &:focus {
      outline: none;
    }
  }
`

const FormId = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
  }

  & > button {
    position: absolute;
    right: 10px;
    height: 25px;
    color: white;
    background: none;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(85, 129, 179, 0.8);
      transition: all 0.3s ease;
    }
  }
`

const ValidateInput = styled.div`
  color: red;
  font-size: 1rem;
`

const Button = styled.button`
  margin-top: 80px;
  width: 150px;
  height: 50px;
  border: 1px solid white;
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(85, 129, 179, 0.8);
    transition: all 0.3s ease;
  }

  &:active {
    outline: none;
  }
`

export default NewAccount
