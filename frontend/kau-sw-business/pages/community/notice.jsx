import React from 'react';
import axios from "axios";

import ContentFrame from '../../components/ContentFrame';
import withHead from '../../components/hoc/withHead';
import List from "../../components/List";

const Notice = (props) => {
  return <ContentFrame title="공지사항" state={5}><List {...props} /></ContentFrame>;
};

export const getServerSideProps = async ({ query = {} }) => {
  const { page: pageNo = 1 } = query;
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/notice?category=notice&rowsPerPage=5&pageNo=${pageNo}`
  );
  return { props: data };
};

export default withHead(Notice);
