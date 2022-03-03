import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  max-width: 750px;
`;

const GoodImage = ({ photo, name }) => (
  <ImageWrapper>
    <img
      className="card-good__image"
      src={`../../db/goods-image/${photo}`}
      alt={name}
    />
  </ImageWrapper>
);
export default GoodImage;
