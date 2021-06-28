import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Internship = () => {
  return (
    <ContentFrame title="인턴십" state={2}>
      <Content>
        <Title text="현장실습(인턴십)" />
        <Subtitle text="개요" />
        <p>
          현장 적응력과 창의력을 지닌 인재 양성을 위해 대학과 현장 실습기관이 공동으로 참여하여 국내외 산업현장에서
          학생에게 이론의 적용, 실무교육 및 실습 등을 실시하고 이를 통해 학점을 부여하는 산합협력 교육과정
        </p>
        <br />
        <br />

        <Subtitle text="단기 현장실습 (계절학기 중 4주 이상의 기간 동안 실시하는 현장실습)" />
        <li>일반 기업체 현장실습</li>

        <br />
        <br />
        <Subtitle text="장기 현장실습 (정규학기에 8주 이상의 기간 동안 실시하는 현장실습)" />
        <li>여름/겨울 계절 인턴</li>
        <li>ICT 학점연계 프로젝트 인턴십</li>
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

export default Internship;
