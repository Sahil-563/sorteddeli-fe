import React from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 37px;
  height: 37px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(IoSearch)`
  font-size: 16px;
  color: #000;
  transition: color 0.3s ease; /* Adding transition */

  ${SearchContainer}:hover & {
    color: #d10000; /* Changing color on hover */
  }
`;

const CustomSearch = () => {
  return (
    <SearchContainer>
      <SearchIcon />
    </SearchContainer>
  );
};

export default CustomSearch;
