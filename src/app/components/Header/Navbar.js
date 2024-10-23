"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaPhoneVolume } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import Image from "next/image";
import styled from "styled-components";
import StickyNav from "./StickyNav";
import SearchBar from "react-ai-search-bar";
import "react-ai-search-bar/dist/index.css";

const Navbar = () => {
  const Navlinks = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "About Us", slug: "/about" },
    { id: 3, name: "Shop", slug: "/shop" },
    { id: 4, name: "Recipes", slug: "/recipes" },
    { id: 5, name: "FAQ", slug: "/faq" },
  ];

  const bottomSection = [
    { id: 1, image: "/assets/roti.svg", name: "Roti" },
    { id: 2, image: "/assets/Pizza.svg", name: "Pizza" },
    { id: 3, image: "/assets/batter-55x55.png", name: "Batter" },
    { id: 4, image: "/assets/Bread.svg", name: "Bread" },
    { id: 5, image: "/assets/Pasta.png", name: "Pasta" },
    { id: 6, image: "/assets/Snacks.png", name: "Snacks" },
  ];

  const placeHolders = [
    "What product or topic interests you?",
    "What do you need help finding?",
    "Hi, How can I help you?",
    "Seeking inspiration? Let us assist you.",
    "Whats the focus of your search?",
    "How can we guide your journey?",
  ];

  const [sticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      {/*Top section */}
      <div className="bg-[#1e1e1e] text-white flex h-[58px] w-full lg:justify-around  justify-between items-center lg:px-24 px-3 text-[14px] font-bold cursor-pointer">
        <div className=" hidden gap-6  lg:flex">
          {Navlinks.map((link, key) => (
            <div key={link.id}>{link.name}</div>
          ))}

          <div className="flex gzap-4 items-  center ml-16">
            <div className="flex items-center gap-3">
              <span>
                <FaPhoneVolume />
              </span>
              <span className="font-bold">+91 77580 99608</span>
            </div>
            <div className="">Request a call back</div>
          </div>
        </div>
        <div className="flex lg:hidden items-center">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div> Select your city</div>
          <div className="flex gap-3 items-center">
            <span>
              <BiSolidUser />
            </span>
            Login
          </div>
        </div>
      </div>

      <div className="w-full flex md:px-20 items-center pt-8 gap-20">
        <div className="hidden lg:block" style={{ flexShrink: 0 }}>
          <Image src="/sorteddeli-logo.png" alt="" height={75} width={200} />
        </div>
        <AiBar className="flex-grow px-3">
          <SearchBar
            placeholder={placeHolders}
            client="Sorted"
            top="60px"
            theme="dark"
          />
        </AiBar>
        <div className="hidden lg:flex gap-6">
          <span>
            <BsSuitHeartFill color="#000" fontSize={18} />
          </span>
          <span>
            <FaBagShopping color="#000" fontSize={18} />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MenuOverlay onClick={toggleMenu}>
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            {Navlinks.map((link, key) => (
              <div key={link.id} className="py-2 px-4 text-lg font-bold">
                {link.name}
              </div>
            ))}

            {bottomSection.map((data) => (
              <div key={data.id} className="flex items-center gap-4 mt-2">
                <img src={data.image} alt="" />
                <TextBox className="text-lg font-bold">{data.name}</TextBox>
              </div>
            ))}
          </MenuContainer>
        </MenuOverlay>
      )}

      {isMenuOpen && (
        <MenuOverlay onClick={toggleMenu}>
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end pr-2">
              <button className="focus:outline-none" onClick={toggleMenu}>
                <FaTimes size={24} />
              </button>
            </div>

            {Navlinks.map((link, key) => (
              <div key={link.id} className="py-2 px-4 text-lg font-bold">
                {link.name}
              </div>
            ))}
            {bottomSection.map((data) => (
              <div key={data.id} className="flex items-center gap-4 mt-2">
                <img src={data.image} alt="" />
                <TextBox className="text-lg font-bold">{data.name}</TextBox>
              </div>
            ))}
          </MenuContainer>
        </MenuOverlay>
      )}
      {/*BottomSection */}
      <StyledContainer>
        {bottomSection.map((data) => (
          <StyledItem key={data.id}>
            <img src={data.image} alt="" />
            <TextBox>{data.name}</TextBox>
          </StyledItem>
        ))}
      </StyledContainer>

      {/*BottomSection */}
      {sticky ? <StickyNav /> : null}
    </nav>
  );
};

export default Navbar;

const MenuOverlay = styled.div`
  position: fixed;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 350px;
  background-color: #e5e7eb;
  padding: 20px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: transform 0.6s ease-in-out;
`;

const StyledContainer = styled.div`
  display: flex !important;
  justify-content: center;
  padding: 30px 0px;
  align-items: center;

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  padding-inline: 30px;

  img {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 768px) {
    padding-inline: 5px;
  }
`;

const TextBox = styled.p`
  color: #000 !important;
`;

const AiBar = styled.div`
  color: #000 !important;

  h3 {
    font-weight: bold;
  }
`;
