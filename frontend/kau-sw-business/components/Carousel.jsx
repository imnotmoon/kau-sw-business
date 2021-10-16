import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
	const [banners, setBannsers] = useState([
		{ src: "/img/main_visual_img01.png", alt: "" },
		// { src: "/img/main_visual_img02.png", alt: "" },
		// { src: "/img/main_visual_img03.png", alt: "" },
	]);

	useEffect(() => {
		//! API : get banner images
	}, []);

	return (
		<Slider {...settings}>
			{banners.map((item, idx) => {
				return (
					<div key={idx}>
						<CarouselItem>
							<h1>제목입니다.</h1>
							<h3>소제목입니다.</h3>
							<div>
								<Image src={item.src} alt={item.alt} width={1920} height={380} layout="fixed" />
							</div>
						</CarouselItem>
					</div>
				);
			})}
		</Slider>
	);
};

const settings = {
	infinite: true,
	speed: 700,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplaySpeed: 6000,
	autoplay: true,
	draggable: true,
	adaptiveHeight: true,
};

const CarouselItem = styled.div`
	& > div {
		height: 380px;

		& > img {
			width: 100vw;
			height: 380px;
			object-fit: cover;
		}
	}
	& > h1,
	h3 {
		position: absolute;
		z-index: 400;
		color: white;
	}

	& > h1 {
		top: 15%;
		left: 20%;
	}

	& > h3 {
		top: 30%;
		left: 20%;
	}
`;

export default Carousel;
