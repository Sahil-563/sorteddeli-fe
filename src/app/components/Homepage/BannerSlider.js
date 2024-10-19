import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const bannerData = [
    {
      id: 1,
      image: "/assets/sliderimages/4.webp",
    },
    {
      id: 2,
      image: "/assets/sliderimages/5.webp",
    },
    {
      id: 3,
      image: "/assets/sliderimages/6.webp",
    },
  ];

  return (
    <SliderContainer className="slider-container lg:h-[550px] overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <img
            src={data.image}
            alt=""
            className="w-full object-cover h-full max-h-[550px]"
            key={data.id}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default BannerSlider;

const SliderContainer = styled.div`
  .slick-track {
    height: 550px;
    display: flex;
    width: 100%;
  }
  .slick-dots {
    bottom: 20px;
    li {
      margin: 0;
    }
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
    font-size: 10px;
  }
`;
