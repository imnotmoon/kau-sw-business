import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/basic_education/5-1.png';
import img2 from '../../public/img/basic_education/1-5.png';

const Introduce = () => {
  return (
    <ContentFrame title="소개" state={3}>
      <Content>
        <Title text="개편방향 및 교육체계"></Title>
        <Subtitle text="3단계 AI‧SW교육과정 운영"></Subtitle>
        <li>AI‧SW 관련 23개 교과목을 전교생이 수강할 수 있도록 지원</li>
        <li>전공 특화 AI‧SW 교과목들은 SW Core(SWC), AI‧빅데이터, 시스템, 융합 모듈로 구성하여 제공</li>
        <br />
        <Subtitle text="입학전 교과목 2개를 포함하여 총 4개 교과목* 7학점 필수 수강"></Subtitle>
        <br />
        <Subtitle text="학생 개인별 맞춤형 교육을 위한 튜터링, 계절학기제 등 제도적 지원"></Subtitle>
        <ImageContent alt="" src={img1} paddingLeft={20}></ImageContent>
        <br />
        <Subtitle text="Air Mobility 산업의 핵심 기술 - ‘AI‧SW’"></Subtitle>
        <p>
          Air Mobility 산업생태계(Ecosystem)는 비행체 설계‧제작을 위한 HW 인프라 요소기술, 비행체 자율주행시스템을 위한
          AI‧SW 핵심 기술, 모빌리티 서비스 산업 분야를 위한 AI+X 융합 기술, 이에 기반한 다양한 응용 산업 등으로 구성
        </p>
        <br />
        <Li>
          <strong>(HW 인프라)</strong> 비행체 제작을 위한 기체 설계 및 제작, 전기전자장치, 초고속 통신, 고효율 배터리,
          충전인프라 등 요소기술
        </Li>
        <Li>
          <strong>(AI‧SW 기술)</strong> AI, 자율주행, IoT, 보안, 빅데이터 처리 기술, 지도제작 및 측위 기술인
          SLAM(Simultaneous Localization And Mapping) 등
        </Li>
        <Li>
          <strong>(AI+X 융합기술)</strong> 모빌리티 플랫폼, 교통‧관제, 스마트 물류, 승차 공유 서비스, 운송관리 등에
          필요한 AI 융합 기술
        </Li>
        <ImageContent alt="air mobility 산업 생태계와 항공대 역량" src={img2} paddingLeft={20}></ImageContent>
        <br />
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > li {
    list-style-type: square;
    padding-left: 20px;
    color: #525252;
    font-size: 17px;
    padding-bottom: 10px;
  }

  & > p {
    padding-left: 20px;
    color: #525252;
    font-size: 17px;
    padding-bottom: 10px;
  }
`;

const Li = styled.li`
  list-style-type: square;
  margin-left: 20px;
  color: #525252;
  font-size: 17px;
  padding-bottom: 10px;
`;

export default Introduce;
