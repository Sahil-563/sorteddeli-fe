import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import styled from "styled-components";

const StickyNav = () => {
  const bottomSection = [
    {
      id: 1,
      image: "/assets/roti.svg",
      name: "Roti",
    },
    {
      id: 2,
      image: "/assets/Pizza.svg",
      name: "Pizza",
    },
    {
      id: 3,
      image: "/assets/batter-55x55.png",
      name: "Batter",
    },
    {
      id: 4,
      image: "/assets/Bread.svg",
      name: "Bread",
    },
    {
      id: 5,
      image: "/assets/Pasta.png",
      name: "Pasta",
    },
    {
      id: 6,
      image: "/assets/Snacks.png",
      name: "Snacks",
    },
    {
      id: 7,
      image: "/assets/All-Products.png",
      name: `All Products`,
    },
  ];
  return (
    <div className="fixed w-full top-0 z-50 bg-[#fff]">
      <StyledContainer>
        {bottomSection.map((data) => (
          <StyledItem key={data.id}>
            <img src={data.image} alt="" />
            <TextBox>{data.name}</TextBox>
          </StyledItem>
        ))}
        <div className="absolute right-[11.5%]">
          <FaBagShopping color="#000" fontSize={18} />
        </div>
      </StyledContainer>
    </div>
  );
};

export default StickyNav;
const TextBox = styled.p`
  color: #000 !important;
  max-width: 80px;
`;

const StyledContainer = styled.div`
  display: flex !important;
  justify-content: center;
  padding: 20px 0px;
  align-items: center;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  padding-inline: 10px;
  img {
    width: 40px;
    height: 40px;
  }
`;
