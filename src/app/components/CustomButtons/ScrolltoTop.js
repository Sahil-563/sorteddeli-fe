import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden lg:block">
      <ScrollToTop
        className={`scroll-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
        id="scroll-to-top"
      >
        <IoIosArrowUp fontSize={24} />
      </ScrollToTop>
    </div>
  );
};

const ScrollToTop = styled.div`
  position: fixed;
  height: 46px;
  width: 46px;
  bottom: 106px;
  z-index: 1000;
  right: 80px;
  cursor: pointer;
  display: none;
  background-color: #d10000;
  opacity: 0;
  &.show {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  &:hover {
    background-color: white;

    & > svg {
      color: #d10000;
    }
  }
`;

export default ScrollToTopButton;
