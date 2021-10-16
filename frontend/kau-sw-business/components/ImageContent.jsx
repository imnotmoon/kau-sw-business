import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContent = ({ src, alt, paddingLeft }) => {
	return (
		<Container paddingLeft={paddingLeft}>
			<Image quality={100} src={src} alt={alt ? alt : ""} />
		</Container>
	);
};

const Container = styled.div`
	padding-left: ${(props) => props.paddingLeft}px;
`;

export default ImageContent;
