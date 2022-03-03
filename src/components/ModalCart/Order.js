import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// elements
import CartHead from "./CartHead";
import CartBody from "./CartBody";
import CartFoot from "./CartFoot";
import Button from "../Styled/Button";
// store
import { selectCart } from "../../store/cartSlice";
import { selectGoodsEntities } from "../../store/goodsSlice";
import {
  selectDisableSendButton,
  checkDisableSend,
  setCartCheck,
} from "../../store/sendButtonSlice";

// styled components
const CartTitle = styled.h2`
  text-align: left;
  font-size: 32px;
  margin-bottom: 15px;
`;
const TableWrapper = styled.div`
  overflow-y: auto;
  width: 100%;
`;
const CartTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 30px;
`;
const CartButton = styled(Button).attrs({
  type: "submit",
})``;

// ****************************************
const Order = () => {
  const dispatch = useDispatch(),
    cart = useSelector(selectCart),
    goodsEntities = useSelector(selectGoodsEntities),
    disableSend = useSelector(selectDisableSendButton);
  const initCartTitle = "Корзина";
  const [cartTitle, setCartTitle] = useState();

  const total = cart.reduce(
    (acc, item) => acc + +goodsEntities[item.id].cost,
    0
  );

  useEffect(() => {
    if (cart.length > 0) {
      setCartTitle(initCartTitle);
      dispatch(setCartCheck(true));
    } else {
      setCartTitle("Корзина пуста!!!");
      dispatch(setCartCheck(false));
    }
    dispatch(checkDisableSend());
  }, [cart, dispatch]);

  return (
    <>
      <CartTitle>{cartTitle}</CartTitle>
      <TableWrapper>
        <CartTable>
          <CartHead />
          <CartBody />
          <CartFoot total={total} />
        </CartTable>
      </TableWrapper>
      <CartButton disable={disableSend} text="Оформить" form="phone_form" />
    </>
  );
};
export default Order;
