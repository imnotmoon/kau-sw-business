import React from "react";
import ContentFrame from "../../components/ContentFrame";
import withHead from "../../components/hoc/withHead";

const Events = () => {
	return <ContentFrame title="SW행사(교내)" state={4}></ContentFrame>;
};

export default withHead(Events);
