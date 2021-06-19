import React, { Suspense } from 'react';
import styled from 'styled-components';

// compoenents
import { NewsCardFallbacks } from './Fallbacks';

// interface
interface NewsCardProp {
  title: string;
  type: string;
}

//! pseudo data
import { newsData, notiData } from '../utils/sample-data';

const NewsCards: React.FC<NewsCardProp> = ({ title, type }) => {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <div>more..</div>
      </div>
      {/* <Suspense fallback={NewsCardFallbacks}> */}
      <Contents>
        {type === 'noti'
          ? notiData.map((item, idx) => {
              return (
                <div key={idx}>
                  <a href={item.link}>{item.title}</a>
                  <div>{item.postdate}</div>
                </div>
              );
            })
          : newsData.map((item, idx) => {
              return (
                <div key={idx}>
                  <a href={item.link}>{item.title}</a>
                  <div>{item.postdate}</div>
                </div>
              );
            })}
      </Contents>
      {/* </Suspense> */}
    </Container>
  );
};

export default NewsCards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 30px 20px;
  border: 1px solid #dddddd;
  width: 25vw;
  min-width: 300px;
  color: #333;
  margin: 30px 10px 30px 10px;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-top: 20px;

    & > h3 {
      font-weight: 400;
      font-size: 22px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  color: #6a6a6a;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    & > a {
      text-decoration: none;
      color: #6a6a6a;
    }
  }
`;
