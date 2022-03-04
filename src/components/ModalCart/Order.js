import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import env from '../../env.json';
import { OrderContext } from '../../context';
// elements
import CartHead from './CartHead';
import CartBody from './CartBody';
import CartFoot from './CartFoot';
import CartButton from './CartButton';
// store
import { selectCart } from '../../store/cartSlice';
import { selectGoodsEntities } from '../../store/goodsSlice';

// styled components
const hoverColor = env.hoverColor;

const CartTitle = styled.h2`
  text-align: left;
  font-size: 32px;
  margin-bottom: 15px;
`;
const TableWrapper = styled.div`
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${hoverColor};
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const CartTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 30px;
`;

const Order = () => {
  const cart = useSelector(selectCart);
  const goodsEntities = useSelector(selectGoodsEntities);

  const {
    sendButton: { setCartCheck },
  } = useContext(OrderContext);

  const initCartTitle = 'Корзина';
  const [cartTitle, setCartTitle] = useState();

  const total = cart.reduce(
    (acc, item) => acc + +goodsEntities[item.id].cost,
    0,
  );

  useEffect(() => {
    if (cart.length > 0) {
      setCartTitle(initCartTitle);
      setCartCheck(true);
    } else {
      setCartTitle('Корзина пуста!!!');
      setCartCheck(false);
    }
  }, [cart, setCartCheck]);

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
      <CartButton />
    </>
  );
};
export default Order;
