import React, { useState } from "react";
import styled from "styled-components";

const TestimonialCard = ({ data }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const characterLimit = 171;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (showFullDescription) {
      return data.description;
    } else {
      return data.description.length > characterLimit
        ? `${data.description.slice(0, characterLimit)}...`
        : data.description;
    }
  };

  return (
    <Container>
      <TopSection>
        <ImageContainer>
          <img src={data.image} height={120} width={120} alt="" />
        </ImageContainer>
        <p className="text-[16px] text-center">{data.name}</p>
        <p className="text-[12.8px] text-center">{data.title}</p>
      </TopSection>

      <BottomSection>
        <DescriptionText>{getDescription()}</DescriptionText>
        <div className="flex justify-center">
          {data.description.length > characterLimit && (
            <ReadMoreButton onClick={toggleDescription}>
              {showFullDescription ? "Hide" : "Read More"}
            </ReadMoreButton>
          )}
        </div>
      </BottomSection>
    </Container>
  );
};

export default TestimonialCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #000;
  background-color: #fff;
  width: 350px;
  position: relative;
  margin-top: 75px;
  height: max-content;
`;

const TopSection = styled.div`
  padding-bottom: 32px;
`;

const ImageContainer = styled.div`
  margin: 0;
  margin-top: -75px;
  margin-bottom: 15px;
  align-self: center;
`;

const DescriptionText = styled.p`
  text-align: center;
`;

const ReadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: center;
  background-color: transparent;
  border: none;
  color: #c2c2c2;
  cursor: pointer;
  margin-top: 5px;
  font-size: 13px;
`;

const BottomSection = styled.div``;
