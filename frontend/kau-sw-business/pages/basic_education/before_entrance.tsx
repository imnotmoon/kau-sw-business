import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/basic_education/5-2.png';
import img2 from '../../public/img/basic_education/5-3.png';
import img3 from '../../public/img/basic_education/5-4.png';
import img4 from '../../public/img/basic_education/5-5.png';

const BeforeEntrance = () => {
  return (
    <ContentFrame title="입학전 교육" state={3}>
      <Content>
        <Title text="입학전 AI·SW교육 프로그램 운영"></Title>
        <Subtitle text="입학전 AI·SW교육 목표"></Subtitle>
        <li>
          (AI+X 이중언어인 교육 시작) 모든 학과의 학생들이 컴퓨팅 사고력 기반의 AI‧SW 역량을 갖추고 자신의 분야를 혁신할
          융합형 인재로 성장할 첫 단계
        </li>
        <li>
          (AI‧SW 학습동기 부여) 신입생들이 SW기술 기반의 시대적 변화를 인식하고 흥미를 갖게 함으로써, 입학 후 AI‧SW
          교육에 대한 자기주도적 학습자세 유도
        </li>
        <li>
          (AI‧SW분야 학습 경험) 입학 전 SW분야 학습 경험이 없는 신입생들에게 프로그래밍을 즐겁게 경험하는 기회를
          제공하여, 입학 후 AI‧SW 학습에 연착 지원
        </li>
        <br />
        <br />
        <Subtitle text="입학전 SW교육 운영 전략"></Subtitle>
        <li>2022년부터 3개의 교양필수교과목*으로 확대 개편하고, 온/오프라인 강좌로 개설</li>
        <li>오프라인뿐만 아니라 클라우드 기반의 온라인 프로그래밍 실습 교육 환경 제공</li>
        <li>초심자의 동기유발과 흥미를 고려한 동영상 및 게임 기반의 강의 개발</li>
        <li>AI‧SW교육센터가 AI‧SW융합교육의 0단계로서 교육 진행</li>
        <br />
        <br />
        <Subtitle text="입학전 SW교육 교과목 개발"></Subtitle>
        <li>
          전년도 1학년 대상 SW 교양필수과목인 ‘컴퓨팅적사고와 문제해결’ 수강생 대상 설문 결과를 분석하여 교과목 구성
          방향 설정
        </li>
        <li>신설 AI‧SW기초교과목 콘텐츠 구성방향</li>
        <Li>
          (Needs) 전 산업 분야뿐만 아니라 우리 생활을 둘러싸고 있는 AI‧SW 기술사례와 컴퓨터과학 원리를 인지함으로써,
          입학 후 AI‧SW융합교육의 필요성을 인식
        </Li>
        <Li>(Fun) 초심자가 흥미를 갖을 수 있도록 재미있는 동영상과 게임을 최대한 활용</Li>
        <Li>
          (Easy) 초심자도 쉽게 따라 할 수 있는 블록형 교육용 프로그래밍 언어인 스크래치(Scratch)를 활용한 프로그래밍
          교육
        </Li>
        <ImageContent alt="" src={img1} paddingLeft={40}></ImageContent>
        <li>SW융합대학과 공과/항경대학 계열로 구분하고 교과과정을 차별화하여 운영</li>
        <Li>(SW융합대학 계열) 꿈꾸는 인공지능(공통), 컴퓨터와 프로그래밍 강의 제공</Li>
        <Li>(공과/항경대학 계열) 꿈꾸는 인공지능(공통), 컴퓨터와 소프트웨어 강의 제공</Li>
        <ImageContent alt="" src={img2} paddingLeft={40}></ImageContent>
        <ImageContent alt="" src={img3} paddingLeft={40}></ImageContent>
        <ImageContent alt="" src={img4} paddingLeft={40}></ImageContent>
        <br />
        <br />
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > div > div > div > img {
    padding-left: 40px;
  }

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

export default BeforeEntrance;
