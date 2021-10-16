import React from "react";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const NonDiscipline = () => {
	return <ContentFrame title="비교과" state={1}></ContentFrame>;
};

export default withHead(NonDiscipline, "");
