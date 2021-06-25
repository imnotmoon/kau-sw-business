import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import styled from 'styled-components';

// component
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const BusinessModel = () => {
  return (
    <ContentFrame title="사업목표" state={0}>
      <Content>
        <Title text="사업 비전 및 목표" />
        <Subtitle
          text={
            '미래 Air Mobility 산업 사회를 선도할 ‘소프트웨어 퍼스트(Software First)’형 미래 모빌리티 산업* 전문인재를 양성'
          }></Subtitle>
        <img src="/img/introduce/1-6.png" alt="한국항공대학교 소프트웨어 중심대학 비전 및 목표" />
        <br />
        <b>미래 Air Mobility 사회</b>
        <p>
          친환경 에너지 기반의 자율주행차·드론·로봇 기술이 융합되고, 지상·도심항공·개인 이동수단 등이 연계되어,
          이동·화물수송 등이 원활하게 서비스되는 사회
        </p>
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    margin-bottom: 10px;
    padding-left: 20px;
  }

  & > b {
    font-weight: 600;
    color: #262f41;
    padding-left: 20px;
    margin-bottom: 10px;
  }

  & > p {
    padding-left: 20px;
    color: #525252;
    font-size: 17px;
  }
`;

export default BusinessModel;
