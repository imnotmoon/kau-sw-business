import React from 'react';
import styled from 'styled-components';

import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Greeting = () => {
  return (
    <ContentFrame title="인삿말" state={0}>
      <Content>
        <Starting>안녕하십니까?</Starting>
        <br />
        <p>
          한국항공대학교 SW중심대학사업단은 2021년 4월 과학기술정보통신부의 SW중심대학 지원사업 선정되어 미래 모빌리티
          사회를 선도할 AI·SW 인재를 양성하고 있습니다.
        </p>
        <br />
        <strong>
          {'< '}AI융합대학{' >'}
        </strong>
        <p>
          단과대학인 ‘AI 융합대학’을 신설하고 소프트웨어학과, AI자율주행시스템공학과, 스마트드론공학과의 학사과정과
          인공지능 석·박사과정을 통하여 시대가 원하는 AI⋅SW 개발능력을 갖춘 전문인력과 항공우주특성화대학이라는 강점을
          살린 에어 모빌리티 분야에 특화된 AI·SW 융합인력을 배출합니다.{' '}
        </p>
        <br />
        <strong>
          {'< '}전교생을 대상으로 한 3단계 AI·SW 교육 실시{' >'}
        </strong>
        <p>
          입학 전 SW 교육을 시작으로, 1학년 대상 AI·SW 입문 교육, 2학년 대상 전공특화 AI·SW 교육으로 이어지는 ‘3단계
          AI·SW 교육’을 전교생을 대상으로 실시합니다. 모든 학생이 입학 전·후에 AI·SW 기초 교과목 4개(7학점)를 필수
          이수하고, 2학년부터는 전공별 기반기술에 관련된 AI·SW 교과목을 수강합니다. AI물류, AI경영, AI신소재, AI모빌리티
          등 AI와 기존의 전공을 결합한 융합·연계 전공을 제공합니다. 이러한 교육을 통해 학생들을 각자의 전공 지식에 더해
          AI·SW 활용능력을 갖춘 ‘AI+X 이중언어인’으로 키워낼 것입니다.{' '}
        </p>
        <br />
        <strong>
          {'< '}산학협력을 통해 실전형 AI·SW 인재로{' >'}
        </strong>
        <p>
          SW 중심대학 사업에 참여하고 있는 국내 80여 개의 기업, 연구소, 지자체, 정부산하기관과 함께 다양한 산학협력
          프로젝트 및 인턴십을 진행하여 실전형 인재를 양성해낼 것입니다. 특히, 학부 3년-인턴십 1년-대학원 1년의 ‘3+1+1
          연계과정’을 통해 1년 이상의 산업체 경험을 쌓게 하는 산학 학·석사 과정을 운영하여 실전형 전문인력을 배출합니다.
        </p>
        <br />
        <p>
          한국항공대학교는 항공우주특성화대학이라는 터전 위에 SW중심대학사업을 계기로 4차산업혁명시대 미래 모빌리티
          사회를 선도하는 대학으로 도약하고자 합니다. 지속적인 관심과 성원을 부탁드립니다. 감사합니다.
        </p>
        <br />
        <br />
        <Ending>
          한국항공대학교 SW중심대학 사업단장 <strong>최영식</strong>
        </Ending>
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > strong {
    font-size: 17px;
    font-weight: 500;
    line-height: 3;
  }

  & > p {
    line-height: 2;
  }
`;

const Starting = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Ending = styled.p`
  text-align: right;
  font-size: 17px;
`;

export default withHead(Greeting);
