import React from "react";
import axios from "axios";

import ContentFrame from "../../../components/ContentFrame";
import withHead from "../../../components/hoc/withHead";
import Post from "../../../components/Post";

const Notice = (props) => {
  return <ContentFrame title="사업단소식" state={5}><Post {...props}/></ContentFrame>;
};

export const getServerSideProps = async ({ params }) => {
  if(!params || !params.id) return {
    redirect: {
      permanent: false,
      destination: '/news'
    }
  }
  const { id } = params;
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/notice/${id}`
  );
  return { props: data  };
};

export default withHead(Notice);
