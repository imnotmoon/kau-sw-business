import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/collab_industry/4-1.png';
import img2 from '../../public/img/collab_industry/4-2.png';
import withHead from '../../components/hoc/withHead';

const Project = () => {
  return (
    <ContentFrame title="산학프로젝트" state={2}>
      <Content>
        <Title text="산학협력 프로젝트 운영계획"></Title>
        <Subtitle text="3학년 이후 SW학과에 개설된 산학프로젝트 교과목은 필수로 수강"></Subtitle>
        <li>SW전공학생들의 산학협력 프로젝트 참여를 졸업요건에 반영 (참여율: SW 전공 인원 100%)</li>
        <li>산업체 RFP 및 수요를 프로젝트에 반영하고, 지도교수, 기업체 실무 멘토, 학생 팀(5인 내외)단위로 진행</li>
        <li>수강 전 방학 기간에 학생들이 주제에 대한 사전 탐색을 지도교수와 함께 수행 </li>
        <li>
          2학기 프로젝트 과목 종료 시 산업계 인사를 초청 프로젝트 경진대회를 개최하여 산학교류 및 학생 채용의 기회
        </li>
        <br />
        <Subtitle text="우수 프로젝트는 산학R&D프로젝트로 선정하여, 추가적인 연구·개발을 지원"></Subtitle>
        <li>
          중간 평가를 통해 SW 전공 인원의 상위 30%에 해당하는 우수 프로젝트를 선정하고, 학교 및 연계 기업체의 매칭
          펀드로 과제 지원
        </li>
        <br />
        <ImageContent alt="" src={img1} paddingLeft={20}></ImageContent>

        <br />
        <br />
        <Subtitle text="SW중심대학 추진 산학 R&D 프로젝트 운영 계획"></Subtitle>
        <ImageContent alt="" src={img2} paddingLeft={20}></ImageContent>
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
`;

export default withHead(Project);
