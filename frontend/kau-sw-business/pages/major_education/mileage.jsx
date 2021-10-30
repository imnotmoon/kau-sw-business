import React from 'react';
import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';

const Mileage = () => {
  return <ContentFrame title="마일리지" state={1}></ContentFrame>;
};

export default withHead(Mileage, '');
