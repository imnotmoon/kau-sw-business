import React from 'react';
import styled from 'styled-components';

//components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Introduce = () => {
  return (
    <ContentFrame title="소개" state={2}>
      <Content>
          <Title text="산업계 수요를 반영한 실전형 인재 양성"></Title>
          <br></br>
          <Subtitle text="전 학년 체계적 프로젝트 중심의 교육과정으로 강화 개편"></Subtitle>
          <img src="/img/collab_industry/4-3.png" alt="한국항공대학교 SW중심대학 인재상과 교육목표" />
          <br></br>
          <Subtitle text="’OSS First-Use’ 기반 체계적‧적극적 오픈소스 교육과정 수립"></Subtitle>
          <img src="/img/collab_industry/4-4.png" alt="소프트웨어학과의 모듈형 전공교육과정" />
        </Content>
      <Title text="산학 협력 소개"></Title>
      <Subtitle text="산업계 수요를 반영한 실전형 인재 양성"></Subtitle>
      <img src="/img/major_education/2-4.png" alt="" />
      <br />
      <img src="/img/major_education/2-5.png" alt="" />
      <br />
      <br />
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    padding-left: 20px;
  }
`;

export default Introduce;
