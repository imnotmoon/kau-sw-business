import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Contact = () => {
  return <ContentFrame title="contact" state={0}></ContentFrame>;
};

export default withHead(Contact);
