import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>

    </Carousel>
  );
}

export default ImgSlider;

//a slidert formázhatjuk
const Carousel = styled(Slider)`
  margin-top: 20px;

  //ezzel látszódni fog az előtte, utána levő kép két oldalt
  .slick-list {
    overflow: visible;
  }
  //nem aktív pont a slider alatt
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(158, 158, 171);
    }
  }
  //alul lévő aktív pont színe
  li.slick-active button:before {
    color: white;
  }
  //< > gombok is, így látható lesz az előző < gomb is
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 38px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
