import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Introduce = () => {
  return <ContentFrame title="소개" state={4}></ContentFrame>;
};

export default withHead(Introduce);
