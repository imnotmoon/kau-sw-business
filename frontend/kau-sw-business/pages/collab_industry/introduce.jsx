import React from 'react';
import styled from 'styled-components';

//components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/major_education/2-4.png';
import img2 from '../../public/img/major_education/2-5.png';
import withHead from '../../components/hoc/withHead';

const Introduce = () => {
  return (
    <ContentFrame title="소개" state={2}>
      <Content>
        <Title text="산업계 수요를 반영한 실전형 인재 양성"></Title>
        <br></br>
        <Subtitle text="전 학년 체계적 프로젝트 중심의 교육과정으로 강화 개편"></Subtitle>
        <ImageContent alt="한국항공대학교 SW중심대학 인재상과 교육목표" src={img1} paddingLeft={20}></ImageContent>
        <br></br>
        <Subtitle text="’OSS First-Use’ 기반 체계적‧적극적 오픈소스 교육과정 수립"></Subtitle>
        <ImageContent alt="소프트웨어학과의 모듈형 전공교육과정" src={img2} paddingLeft={20}></ImageContent>
      </Content>
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

export default withHead(Introduce);
