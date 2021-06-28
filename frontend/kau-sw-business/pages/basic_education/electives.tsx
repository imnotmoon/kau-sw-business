import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Electives = () => {
  return (
    <ContentFrame title="기초교양교육" state={3}>
      <Content>
        <Title text="개편방향 및 교육체계"></Title>
        <Subtitle text="학생 개인별 맞춤형 교육을 위한 튜터링, 계절학기제 등 제도적 지원"></Subtitle>
        <img src="/img/basic_education/5-1-2.png" alt="sw 교육과정 3단계 중 2단계" />
        
        <p><strong>AI·SW 입문교육</strong></p>
            <Li>기본 텍스트 기반 프로그래밍을 학습하고, 최신 AI·SW기술 및 Air Mobility 사례와 이에 대한 파급력 인식</Li>
            <Li>’컴퓨팅적사고와 문제해결/코딩입문’, ’인공지능소개’ 교과목은 전교생 필수교양과목으로 이수</Li>
            <Li>블랜디드 러닝과 클라우드 SW교육 플랫폼을 활용한 공학계/경영대 계열별 자기 맞춤형 실습 운영</Li>
        <br />
        <p><strong>분야특화 AI·SW 교육</strong></p>
            <Li>계열별 4개 모듈(SW Core(SWC), AI·빅데이터, 시스템, 융합)로 나누고 관련 교과목을 분류하여 제공</Li>
            <Li>외부 전문가 초청 세미나를 통해, Air mobility 등 다양한 분야의 최신 AI·SW 기술사례 소개</Li>
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

export default Electives;
