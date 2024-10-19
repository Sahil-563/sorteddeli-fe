"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Cards/ProductCard";
import { productCard } from "../../../../public/dummydata/productCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductSection = () => {
  const productFilter = [
    {
      id: 1,
      name: "Roties",
      value: "roties",
    },
    {
      id: 2,
      name: "Pizza",
      value: "pizza",
    },
    {
      id: 3,
      name: "Snack",
      value: "snack",
    },
    {
      id: 4,
      name: "Sauce",
      value: "sauce",
    },
  ];

  const [activeFilter, setActiveFilter] = useState(productFilter[0].value);

  const handleFilterClick = (value) => {
    setActiveFilter(value);
  };

  const settings = {
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
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
    <div className="bg-[#f4f5f7] pb-10">
      <ProductFilter>
        {productFilter.map((filter) => (
          <FilterItem
            key={filter.id}
            active={activeFilter === filter.value}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.name}
          </FilterItem>
        ))}
      </ProductFilter>

      <ProductSlider>
        <SliderContainer className="slider-container">
          <Slider {...settings}>
            {productCard.map((data) => (
              <CardContainer key={data.id} className="flex w-[265.5px]">
                <ProductCard data={data} />
              </CardContainer>
            ))}
          </Slider>
        </SliderContainer>
      </ProductSlider>

      <CardSection>
        {productCard.slice(0, 4).map((data) => (
          <div key={data.id} className="flex justify-center">
            <ProductCard data={data} />
          </div>
        ))}
      </CardSection>
    </div>
  );
};

export default ProductSection;

const FilterItem = styled.div`
  position: relative;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      text-decoration-style: wavy;
      text-decoration-color: #d10000;
      text-decoration-line: underline;
      text-underline-offset: 15px;
    `}
`;
const ProductFilter = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  color: #000000 !important;
  font-size: 22px;
  font-weight: 600;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const ProductSlider = styled.div`
  @media (width <= 1440px) {
    display: none;
  }
`;

const CardSection = styled.div`
  display: none;
  @media (width <= 1440px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (width <= 1396px) {
    gap: 5px;
  }
`;
const CardContainer = styled.div``;
const SliderContainer = styled.div`
  padding-inline: 180px;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev {
    font-size: 45px;
    opacity: 1;
    color: #b7b7b7;
    width: 24px;
    height: 24px;
    left: -70px;
    top: 52%;
  }
  .slick-next {
    font-size: 45px;
    opacity: 1;
    color: #b7b7b7;
    width: 24px;
    height: 24px;
    right: -70px;
    top: 52%;
  }
`;
