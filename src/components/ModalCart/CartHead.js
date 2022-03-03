import React from "react";
import styled from "styled-components";

const CartTh = styled.th`
  border: 1px solid #fff;
  padding: 5px 10px;
`;
const TitleNumber = styled(CartTh)`
  text-align: left;
`;

const CartHead = () => (
  <thead>
    <tr>
      <TitleNumber>#</TitleNumber>
      <CartTh>Наименование</CartTh>
      <CartTh>Цвет</CartTh>
      <CartTh>Размер</CartTh>
      <CartTh>Цена</CartTh>
      <CartTh></CartTh>
    </tr>
  </thead>
);
export default CartHead;
