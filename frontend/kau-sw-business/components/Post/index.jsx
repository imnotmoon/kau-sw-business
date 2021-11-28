import React from "react";
import styled from "styled-components";
import moment from "moment";

import Title from '../Title';
import { COLORS } from "../../styles/theme";

// NEXT ENV로 뺄 예정. 경로도 몰라 지금.
const FILE_BASE_URL = 'http://15.164.68.133/.../'

function Post({ data }) {
  console.log(data.files);
  return (
    <>
      <Title text={data.title} />
      <MetaData>
        <MetaDataItem>
          <span>작성자</span>
          <span>{data.writer}</span>
        </MetaDataItem>
        <MetaDataItem>
          <span>조회수</span>
          <span>{data.viewCount}</span>
        </MetaDataItem>
        <MetaDataItem>
          <span>작성시간</span>
          <span>{moment(data.createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}</span>
        </MetaDataItem>
      </MetaData>
      <Content dangerouslySetInnerHTML={{__html: data.content}}></Content>
      {data.files && data.files.length > 0 && 
        <Files>
          <h3>첨부파일</h3>
          {data.files.map((file) => <a key={file.id} href={file.name}>{file.name}</a>)}
        </Files>
      }
      <Buttons>
        <Button>목록</Button>
      </Buttons>
    </>
  );
}

const MetaData = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: 1px solid ${COLORS.BORDER};
  margin: 10px 0;

  & > div {
    border-bottom: 1px solid ${COLORS.BORDER};
  }

  & > div:nth-of-type(1) {
    border-right: 1px solid ${COLORS.BORDER};
  }

  & > div:nth-of-type(3) {
    border-bottom: none;
  }
`

const MetaDataItem = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  height: 35px;

  & > span {
    display: block;
    padding-left: 10px;
    align-self: center;
  }

  & > span:nth-of-type(1) {
    border-right: 1px solid ${COLORS.BORDER};
  }
`

const Content = styled.div`

`

const Files = styled.div`
  padding: 20px;
  background-color: ${COLORS.BACKGROUND};

  & > h3 {
    margin: 5px 0px 15px 0px;
  }

  & > a {
    display: block;
    height: 35px;
    border-top: 1px solid ${COLORS.MENU_DROPDOWN};
    align-self: center;
  }

  & > a:last-child {
    border-bottom: 1px solid ${COLORS.MENU_DROPDOWN};
  }
`

const Buttons = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin: 30px 0px 50px 0px;
`

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: ${COLORS.PRIMARY1};
  color: white;
  font-size: 18px;
  border: none;

  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`

export default Post;
