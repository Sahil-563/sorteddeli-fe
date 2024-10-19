"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import Image from "next/image";
import styled from "styled-components";
import StickyNav from "./StickyNav";
import SearchBar from "react-ai-search-bar";
import "react-ai-search-bar/dist/index.css";

const Navbar = () => {
  const Navlinks = [
    {
      id: 1,
      name: "Home",
      slug: "/",
    },
    {
      id: 2,
      name: "About Us",
      slug: "/about",
    },
    {
      id: 3,
      name: "Shop",
      slug: "/shop",
    },
    {
      id: 4,
      name: "Recipes",
      slug: "/recipes",
    },
    {
      id: 5,
      name: "FAQ",
      slug: "/faq",
    },
  ];

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
      name: "All-Products",
    },
  ];

  const placeHolders = [
    'What product or topic interests you?',
    'What do you need help finding?',
    'Hi, How can I help you?',
    'Seeking inspiration? Let us assist you.',
    'Whats the focus of your search?',
    'How can we guide your journey?'
  ]

  const [sticky, setIsSticky] = useState(false);
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

  return (
    <nav className="">
      {/*Top section */}
      <div className="bg-[#1e1e1e] text-white flex h-[58px] w-full justify-around  items-center px-24 text-[14px] font-bold cursor-pointer">
        <div className="flex gap-6">
          {Navlinks.map((link) => (
            <div key={link.id}>{link.name}</div>
          ))}

          <div className="flex gap-4 items-center ml-16">
            <div className="flex items-center gap-3">
              <span>
                <FaPhoneVolume />
              </span>
              <span className="font-bold">+91 77580 99608</span>
            </div>
            <div className="">Request a call back</div>
          </div>
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
      {/*Mid Section */}

      <div className="w-full flex justify-around items-center pt-8 ">
        <div>
          <Image src="/sorteddeli-logo.png" alt="" height={75} width={200} />
        </div>
        <AiBar className="text-black ">
          <SearchBar
            placeholder={placeHolders}
            client='Sorted'
            top='155px'
            theme='dark'
          />
        </AiBar>
        <div className="flex gap-6">
          <span>
            <BsSuitHeartFill color="#000" fontSize={18} />
          </span>
          <span>
            <FaBagShopping color="#000" fontSize={18} />
          </span>
        </div>
      </div>

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

const StyledContainer = styled.div`
  display: flex !important;
  justify-content: center;
  padding: 30px 0px;
  align-items: center;
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
`;

const TextBox = styled.p`
  color: #000 !important;
`;
const AiBar = styled.div`
  color: #000 !important;
  width: 50%;
`;
