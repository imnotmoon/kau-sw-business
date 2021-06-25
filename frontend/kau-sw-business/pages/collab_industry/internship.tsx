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
        <li>NHN Entertainment 체험형 인턴</li>
        <li>ICT 학점연계 프로젝트 인턴십</li>
        <li>K-SW 포럼 개발자 하계 인턴십</li>
        <li>기업 요청 장기현장실습(딥바이오, 알체라, 코다임, 만도 등)</li>
        <br />
        <br />
        <Subtitle text="현장실습 시행 세칙"></Subtitle>
        <li>소프트웨어현장실습 I, II, III, IV 과목(각 3, 6, 9, 12학점)을 신설하여 학생과 기업체의 선택 확대</li>
        <Li>다양한 기간(학기/방학 포함)과 근무 패턴에 부합하는 인턴십 프로그램 운영 (1학점당 30시간 근무기준)</Li>
        <Li>연계기업의 산학프로젝트를 수행한 학생을 해당 기업에 인턴십으로 우선 배정</Li>
        <li>학생들의 편리한 인턴십 지원과 활동을 위한 지원시스템 구축</li>
        <Li>
          인턴십 참여 학생에 대하여 전담 지도교수 (1인당 10명 학생), 취업담당교수, 학과 취업지원관을 배정하여, 참여학생
          선발, 인턴십 지원 유도, 연계채용을 추진
        </Li>
        <Li>
          재학생들의 인턴십 프로그램을 성공적인 프로그램 수행을 위해 교수가 인턴 참여기업을 학기당 1회 이상 방문하여
          인턴십 파견 학생의 애로사항 파악 및 개선
        </Li>
        <Li>참여기업, 학생, 교수들 사이의 의사소통을 위하여 전용 웹사이트/게시판을 개설</Li>
        <Li>인턴십 급여 지원 (월 130만원 이내/인)</Li>
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
