import React from "react";
import moment from "moment";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const Calendar = () => {
  return <ContentFrame title="캘린더" state={4}></ContentFrame>;
};

export const getServerSideProps = async () => {
  const today = moment();
  const startDate = today.startOf("year").format("YYYY-MM-DD");
  const endDate = today.endOf("year").format("YYYY-MM-DD");
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/schedule?category=influences&from=${startDate}&to=${endDate}`
  );
  return { props: data };
};

export default withHead(Calendar);
