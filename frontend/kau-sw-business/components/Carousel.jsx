import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
	const [banners, setBanners] = useState([
		{ src: "/img/main_visual_img01.png", alt: "" },
		{ src: "/img/main_visual_img02.png", alt: "" },
		{ src: "/img/main_visual_img03.png", alt: "" },
	]);

	useEffect(() => {
		//! API : get banner images
	}, []);

	return (
		<CarouselSlider {...settings}>
			{banners.map((item, idx) => {
				return (
					<section key={idx}>
						<h1>제목입니다.</h1>
						<h3>소제목입니다.</h3>
						<div>
							<CarouselItem>
								<div>
									<Image src={item.src} alt={item.alt} width={1920} height={380} layout="fixed" />
								</div>
							</CarouselItem>
						</div>
					</section>
				);
			})}
		</CarouselSlider>
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

const CarouselSlider = styled(Slider)`
	position: relative;
	top: -125px;
	& h1,
	h3 {
		position: relative;
		z-index: 400;
		color: white;
		top: 200px;
		left: 20%;
	}
`


const CarouselItem = styled.div`
	& > div {
		height: 380px;

		& > img {
			width: 100vw;
			height: 380px;
			object-fit: cover;
		}
	}
`;

export default Carousel;
