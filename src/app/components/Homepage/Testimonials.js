import React from "react";
import TestimonialCard from "../Cards/TestimonialCard";
import { testimonialData } from "../../../../public/dummydata/testimonialsData";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack fontSize={35} />,
    nextArrow: <IoIosArrowForward fontSize={35} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 w-full bg-[#f4f5f7]">
      <h2 className="uppercase text-[24px] font-bold text-black text-center mb-11">
        Testimonials
      </h2>
      <SliderContainer>
        <Slider {...settings}>
          {testimonialData?.map((data) => (
            <CardContainer key={data.id}>
              <TestimonialCard key={data.id} data={data} />
            </CardContainer>
          ))}
        </Slider>
      </SliderContainer>

      <CardSection>
        {testimonialData.slice(0, 3).map((data) => (
          <div key={data.id} className="flex justify-center">
            <TestimonialCard data={data} />
          </div>
        ))}
      </CardSection>
    </div>
  );
};

export default Testimonials;

const SliderContainer = styled.div`
  padding-inline: 200px;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev {
    font-size: 45px;
    opacity: 1;
    color: #b7b7b7;
    width: 35px;
    height: 35px;
    left: -30px;
    top: 57%;
  }
  .slick-next {
    font-size: 45px;
    opacity: 1;
    color: #b7b7b7;
    width: 35px;
    height: 35px;
    right: -30px;
    top: 57%;
  }

  @media (width <= 1440px) {
    display: none;
  }
`;
const CardContainer = styled.div``;
const CardSection = styled.div`
  display: none;
  @media (width <= 1440px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (width <= 1396px) {
    gap: 20px;
  }
`;
