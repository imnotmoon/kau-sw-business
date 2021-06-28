import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Introduce = () => {
  return (
    <ContentFrame title="소개" state={1}>
      <Content>
        <Title text="SW전공교육 소개"></Title>
        <br></br>
        <Subtitle text="인재상과 교육목표"></Subtitle>
        <img src="/img/major_education/2-1.png" alt="한국항공대학교 SW중심대학 인재상과 교육목표" />
        <br></br>
        <Subtitle text="모듈형 전공교육과정"></Subtitle>
        <img src="/img/major_education/2-2.png" alt="소프트웨어학과의 모듈형 전공교육과정" />
        <br></br>
        <Subtitle text="학년별 이수과목"></Subtitle>
        <img src="/img/major_education/2-3.png" alt="소프트웨어학과 졸업 필수 이수과목" />
      </Content>
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
