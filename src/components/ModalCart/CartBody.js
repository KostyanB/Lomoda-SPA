import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import env from '../../env.json';
import { Context } from '../../context';
// store
import { delGood, selectCart } from '../../store/cartSlice';
import { selectGoodsEntities } from '../../store/goodsSlice';
// variable
const hoverColor = env.hoverColor;
// styled
const CartTd = styled.td`
  border: 1px solid #fff;
  padding: 5px 10px;
`;
const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  :hover {
    color: ${hoverColor};
    text-shadow: 0 0 3px ${hoverColor};
  }
`;
const CartLink = styled(Link)`
  :hover,
  :active {
    color: ${hoverColor};
  }
`;

const CartBody = () => {
  const goodsEntities = useSelector(selectGoodsEntities),
    cart = useSelector(selectCart),
    dispatch = useDispatch();

  const {
    scrollLock: { unlockScroll },
    modalOpen: { closeModal },
  } = useContext(Context);

  const delGoodFromCart = good => {
    dispatch(delGood(good));
  };

  const closeCart = () => {
    closeModal();
    unlockScroll();
  };

  return (
    <tbody>
      {cart.map((item, key) => {
        const { id, size, color } = item;
        const { brand, name, cost } = goodsEntities[id];
        return (
          <tr key={key}>
            <CartTd>{key + 1}</CartTd>
            <CartTd>
              <CartLink to={`/card/${id}`} onClick={closeCart}>
                {brand} {name}
              </CartLink>
            </CartTd>
            <CartTd>{color}</CartTd>
            <CartTd>{size}</CartTd>
            <CartTd>{cost} &#8381;</CartTd>
            <CartTd>
              <BtnDelete onClick={() => delGoodFromCart(item)}>
                &times;
              </BtnDelete>
            </CartTd>
          </tr>
        );
      })}
    </tbody>
  );
};
export default CartBody;
