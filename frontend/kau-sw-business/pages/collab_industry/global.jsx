import React from "react";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const Global = () => {
	return <ContentFrame title="글로벌" state={2}></ContentFrame>;
};

export default withHead(Global);
