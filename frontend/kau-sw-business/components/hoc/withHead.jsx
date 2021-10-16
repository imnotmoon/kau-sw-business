import React from "react";
import Head from "next/head";

import Menu from "../Menu";

const withHead = (Component, description) => {
	const C = (props) => {
		return (
			<>
				<Head>
					<title>한국항공대학교 SW중심사업단</title>
					<meta name="description" content={description} />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Menu />
				<Component {...props} />
			</>
		);
	};
	return C;
};

export default withHead;
