import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Notice = () => {
  return <ContentFrame title="공지사항" state={5}></ContentFrame>;
};

export default withHead(Notice);
