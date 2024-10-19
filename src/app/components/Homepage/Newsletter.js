import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container className="py-10 text-[black] text-center flex flex-col justify-center bg-[#fff]">
      <h2 className="text-[26px] px-5 pb-9 font-bold uppercase">
        Join the Sorted Tribe
      </h2>
      <div className="w-full flex justify-center ">
        <EmailForm>
          <EmailInput type="email" placeholder="Enter your email" />
          <SubscribeButton onClick={(e) => e.preventDefault()}>
            Subscribe
          </SubscribeButton>
        </EmailForm>
      </div>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  background-image: url("https://www.sorteddeli.com/wp-content/uploads/2019/03/demo1-0605564611-1.jpg");
`;

const EmailForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
`;

const EmailInput = styled.input`
  border: 1px;
  border-color: rgb(221, 221, 221);
  width: 900px;
  border-radius: 4px;
  padding: 14px;
  margin: 8px;
  font-size: 17px;
`;

const SubscribeButton = styled.button`
  background-color: #1e1e1e;
  color: white;
  width: 270px;
  font-weight: bold;
  padding: 15px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #dc2626;
  }
`;
