import React from 'react';
import Slider from 'react-slick';
import { SliderProp } from '../interfaces/ComponentInterface';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import CarouselItem from './CarouselItem';

const SimpleSlider: React.FC<SliderProp> = () => {
  var settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <CarouselItem>
          {/* <img src="/img/main_visual_img01.png" alt="" width={1920} height={380} /> */}
          <div>
            <img src="/img/main_visual_img01.png" alt="" />
          </div>
        </CarouselItem>
      </div>
      <div>
        <CarouselItem>
          {/* <img src="/img/main_visual_img02.png" alt="" width={1920} height={380} /> */}
          <div>
            <img src="/img/main_visual_img02.png" alt="" />
          </div>
        </CarouselItem>
      </div>
      <div>
        <CarouselItem>
          {/* <img src="/img/main_visual_img03.png" alt="" width={1920} height={380}/> */}
          <div>
            <img src="/img/main_visual_img03.png" alt="" />
          </div>
        </CarouselItem>
      </div>
    </Slider>
  );
};

export default SimpleSlider;

//! API //
// https://react-slick.neostack.com/docs/api/
