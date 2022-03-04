import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
`;

const PromoImage = ({ photo }) => (
  <Image
    src={`../../db/promo-image/${photo.img}`}
    alt={photo.name}
    loading="lazy"
  />
);

export default PromoImage;
