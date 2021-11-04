import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({bannerData}) => {

  return (
    <CarouselSlider {...settings}>
      {bannerData.map((item, idx) => {
        return (
          <section key={idx}>
            <h1>{item.title}</h1>
            <h3>{item.content}</h3>
            <div>
              <CarouselItem>
                <div>
                  <Image src={item.imageUrl} alt={item.title} width={1920} height={380} layout="fixed" />
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
`;

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
