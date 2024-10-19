import Image from "next/image";
import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import styled from "styled-components";
import CustomSearch from "../CustomButtons/CustomSearch";
import CustomWishlist from "../CustomButtons/CustomWishlist";

const ProductCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainer className="h-full max-h-max w-[265.6px] cursor-pointer max-w-max">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageContainer>
          {!hovered && (
            <img src={data.image} alt="Product" height={238} width={238} />
          )}
          {hovered && data.hoverImage && (
            <HoveredImage
              src={data.hoverImage}
              alt="Hovered Product"
              height={238}
              width={238}
            />
          )}

          <HoverdItems className="absolute top-2/4 left-2/4">
            <CustomSearch />
            <CustomWishlist />
          </HoverdItems>
        </ImageContainer>
        {data.featured ? (
          <div className="bg-red-600 absolute top-0 left-0 uppercase text-[10px] font-bold p-1">
            Featured
          </div>
        ) : null}
      </div>
      <div className="p-3">
        <div>
          <p className="text-black text-[14px] font-bold">{data.title}</p>
        </div>
        <div className="flex gap-7 mt-3 font-bold">
          {data.category.map((c) => (
            <Image key={c.id} src={c.image} alt="" width={30} height={30} />
          ))}
        </div>
        <div className="text-black mt-5 font-bold pb-[16px]">₹{data.price}</div>
        <AddToCart className="flex gap-3 rounded bg-red-600 p-2 text-[12px] justify-center items-center">
          <FaBagShopping color="#fff" fontSize={16} />
          <span className="font-bold">Add to Cart</span>
        </AddToCart>
      </div>
    </CardContainer>
  );
};

export default ProductCard;

const ImageContainer = styled.div`
  position: relative;
  width: 238px;
  height: 238px;
`;

const HoveredImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: opacity 1.5s ease;
`;

const AddToCart = styled.div`
  display: flex;
  opacity: 0;
  gap: 10px;
  border-radius: 4px;
  background-color: #d10000;
  padding: 8px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  height: 38px;
  align-items: center !important;
`;

const HoverdItems = styled.div`
  opacity: 0;
  display: flex;
  gap: 10px;
  position: absolute; /* Important */
  top: 50%; /* Position Y halfway in */
  left: 50%; /* Position X halfway in */
  transform: translate(-50%, -50%); /* Move it halfway back(x,y) */
`;

const CardContainer = styled.div`
  padding: 13px 13px 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  height: max-content;
  &:hover {
    border: 1px solid #00000030;
    border-radius: 4px;
  }
  &:hover ${AddToCart} {
    display: flex; /* Show AddToCart on hover */
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  &:hover ${HoveredImage} {
    opacity: 1;
    transition: opacity 0.15s linear, color 0.15s linear,
      border-color 0.15s linear, background-color 0.15s linear;
  }

  &:hover ${HoverdItems} {
    opacity: 1;
    transition: opacity 0.15s linear, color 0.15s linear,
      border-color 0.15s linear, background-color 0.15s linear;
  }
`;
