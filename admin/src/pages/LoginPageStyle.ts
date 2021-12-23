import styled from '@emotion/styled';
import { WDiv, COLORS } from '../utils/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Div = styled(WDiv)`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 100px;
    height: 100px;
  }

  & > form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 44px;
  margin-top: 50px;
  width: 70%;
  background-color: ${COLORS.BACKGROUND};
  border: 1px solid ${COLORS.BORDER};
  border-radius: 16px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  cursor: pointer;
  font-size: 17px;
  color: white;

  &:hover,
  active {
    background-color: rgba(35, 221, 2, 0.6);
  }
`;

export const Input = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  color: white;
  font-size: 18px;
  margin-top: 36px;

  > b {
    cursor: default;
  }

  & > input {
    color: black;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: none;
    border-radius: 8px;
    border: 1px solid ${COLORS.BORDER};
    height: 28px;
    padding-left: 10px;
    outline: none;
  }
`;
