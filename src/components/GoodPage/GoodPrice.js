import React from "react";
import styled from "styled-components";

const Price = styled.p`
  margin-bottom: 30px;
  @media (max-width: 968px) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    place-self: end start;
    margin-bottom: 15px;
  }
  @media (max-width: 520px) {
    grid-row: 2;
    margin-bottom: 10px;
  }
`;

const GoodPrice = ({ cost }) => <Price>{cost} ₽</Price>;

export default GoodPrice;
