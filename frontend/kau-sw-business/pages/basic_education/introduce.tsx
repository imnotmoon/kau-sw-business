import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

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
        <img src="/img/basic_education/5-1.png" alt="" />
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Introduce;
