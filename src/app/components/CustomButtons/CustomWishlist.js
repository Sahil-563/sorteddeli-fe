import React from "react";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";

const HeartContainer = styled.div`
  width: 37px;
  height: 37px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeartIcon = styled(FaHeart)`
  font-size: 16px;
  color: #000;
  transition: color 0.3s ease; /* Adding transition */

  ${HeartContainer}:hover & {
    color: #d10000; /* Changing color on hover */
  }
`;

const CustomWishlist = () => {
  return (
    <HeartContainer>
      <HeartIcon />
    </HeartContainer>
  );
};

export default CustomWishlist;
