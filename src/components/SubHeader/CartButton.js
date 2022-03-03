import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Context } from "../Context";
import env from "../../env.json";
//store
import { selectCart } from "../../store/cartSlice";
//functions
import declOfNum from "../../functions/declOfNum";
//components
import Icons from "../Styled/Icons";
// variable
const hoverColor = env.hoverColor;
// styled
const Button = styled.button`
  -ms-grid-column-align: end;
  justify-self: end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5px;
  background: none;
  padding-left: 28px;
  border: none;
  width: max-max-content;

  :hover,
  :hover > svg,
  :active,
  :active > svg {
    color: ${hoverColor};
    stroke: ${hoverColor};
  }

  @media (max-width: 768px) {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2 / 3;
  }

  @media (max-width: 576px) {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;

    & > span {
      display: none;
    }
  }
`;

const CartButton = () => {
  const initTitle = "Корзина";
  const [title, setTitle] = useState(initTitle);
  const cart = useSelector(selectCart);

  const {
    modalOpen: { openModal },
  } = useContext(Context);

  const openCart = () => openModal();

  // set cart title
  useEffect(() => {
    if (cart.length > 0) {
      const goodTitle = declOfNum(cart.length, ["товар", "товара", "товаров"]);
      const newButtonTitle = `${cart.length} ${goodTitle}`;
      setTitle(newButtonTitle);
    } else {
      setTitle(initTitle);
    }
  }, [cart]);

  return (
    <Button onClick={openCart}>
      <Icons name="cart" width={24} height={24} stroke="#888" />
      <span>В корзине </span>
      {title}
    </Button>
  );
};
export default CartButton;
