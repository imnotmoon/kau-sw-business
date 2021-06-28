import React from 'react';
import ContentFrame from '../../components/ContentFrame';

// components
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const Introduce = () => {
  return (
    <ContentFrame title="소개" state={2}>
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

export default Introduce;
