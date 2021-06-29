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

        <Subtitle text="장기 현장실습 (정규학기에 8주 이상의 기간 동안 실시하는 현장실습)" />
        <li>여름/겨울 계절 인턴</li>
        <li>ICT 학점연계 프로젝트 인턴십</li>
        <br />
<<<<<<< HEAD
        <br />

        <Subtitle text="ICT 학점연계 프로젝트 인턴십" />
        <li><strong>사업개요</strong> 
        : '과학기술정보통신부'에서는 ICT분야 대학생들이 정규학기 중에 우수 중소/중견기업에서 실무 프로젝트를 수행하고 이를 학점으로 인정받을 수 있도록 지원하는 프로그램</li>
        <li><strong>수행기관</strong>
        : 국내외 중소/중견/벤처기업 등</li>
        <li><strong>선발대상</strong> 
        : 학업 및 프로젝트 수행실적 우수학생 중심으로 기업체 면접 후 선발</li>
        <li><strong>실습기간</strong> 
        : 1학기(4개월) / 2학기(4개월)</li>
        <li><strong>지원내용</strong> 
        : 실습생 수당(약 100만원), 체재비(월 30만원)</li>
        <li><strong>신청방법</strong> 
        : 현장실습지원 시스템</li>
        <li><strong>학점인정 </strong>
        : 학기 등록 필수, 최대 12학점까지 인정가능</li>
        <br />
        <img src="/img/collab_industry/4-5.png" alt="ICT 인턴쉽 일정" />
=======
>>>>>>> 27500a31e2b6fdad45ccf43b701d1772451a5d52
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
