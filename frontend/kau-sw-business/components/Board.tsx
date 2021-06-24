import React from 'react';
import styled from 'styled-components';

//! pseudo data
import { boardElements } from '../utils/sample-data';

const Board = () => {
  return (
    <>
      <Container>
        {boardElements.map((boardElement, index) => (
          <div key={index}>
            <dl style={{ margin: '20px 15px' }}>
              <dt>
                <span>{boardElement.state}</span>
                <span>{boardElement.endDate}</span>
              </dt>
              <dd>{boardElement.title}</dd>
              <dd>
                접수기간: {boardElement.startDate} ~ {boardElement.endDate}
              </dd>
              <BoardButtonBox>
                <button>상세보기</button>
                <button>접수예정</button>
              </BoardButtonBox>
            </dl>
          </div>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    & > div {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
    justify-items: center;
    align-items: center;
    & > div {
      width: 90%;
    }
  }

  & > div {
    margin: 5px;
    height: 240px;
    border: 1px solid #fefefe;
    margin-bottom: 20px;
    vertical-align: top;
    background-color: #fff;
    margin-left: 5px;
    margin-right: 5px;

    & > dl > dt > span:nth-of-type(1) {
      display: inline-block;
      background-color: #84af1e;
      width: 75px;
      height: 25px;
      line-height: 25px;
      color: #fff;
      font-size: 0.8em;
      font-weight: 400;
      border-radius: 20px;
      vertical-align: middle;
      text-align: center;
    }

    & > dl > dt > span:nth-of-type(2) {
      display: inline-block;
      color: #777;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 0 0 0;
      margin: 0 0 20px 5px;
    }

    & > dl > dd:nth-of-type(1) {
      display: inline-block;
      color: #000000;
      font-weight: 600;
      font-size: 16px;
      word-break: keep-all;
      letter-spacing: -1px;
      padding: 5px 0 0 0;
      margin: 0 0 20px 5px;
    }

    & > dl > dd:nth-of-type(2) {
      display: inline-block;
      color: #777;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 0 0 0;
      margin: 0 0 20px 5px;
    }
  }
`;

const BoardButtonBox = styled.dd`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 0 20px 5px;

  & > button:nth-of-type(1) {
    background-color: #4e83c6;
    color: #fff;
    font-size: 0.9em;
    text-align: center;
    width: 120px;
    height: 36px;
    margin-top: 10px;
    cursor: pointer;
  }

  & > button:nth-of-type(2) {
    background-color: #7fb341;
    color: #fff;
    font-size: 0.9em;
    text-align: center;
    width: 120px;
    height: 36px;
    margin: 10px 0 0 15px;
    cursor: pointer;
  }
`;

export default Board;
