import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const News = () => {
  return <ContentFrame title="사업단소식" state={5}></ContentFrame>;
};

export default withHead(News);
