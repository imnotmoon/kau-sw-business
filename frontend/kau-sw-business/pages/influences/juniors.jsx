import React from "react";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const Juniors = () => {
	return <ContentFrame title="초중고" state={4}></ContentFrame>;
};

export default withHead(Juniors);
