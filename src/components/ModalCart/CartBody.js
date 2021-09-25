import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import env from '../../env.json';
import { enableScroll } from '../Functions/scrollControl';
// store
import { delGood, selectCart, setShowCart } from '../store/cartSlice';
import { selectGoodsObj } from '../store/goodsListSlice';


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
        color: ${env.hoverColor};
        text-shadow: 0 0 3px ${env.hoverColor};
    }
`;
const CartLink = styled(Link)`
    :hover, :active {
        color: ${env.hoverColor};
    }
`;

const CartBody = () => {

    const goodsObj = useSelector(selectGoodsObj),
        cart = useSelector(selectCart),
        dispatch = useDispatch();

    const delGoodFromCart = good => {
        dispatch(delGood(good));
    }
    const closeCart = () => {
        dispatch(setShowCart(false));
        enableScroll();
    };

    return (
        <tbody>
        {cart.map((item, key) => {
            const { id, size, color } = item,
                { brand, name, cost } = goodsObj[id];
            return (
                <tr key={key}>
                    <CartTd>{key + 1}</CartTd>
                    <CartTd><CartLink to={`/card/${id}`} onClick={closeCart}>{brand} {name}</CartLink></CartTd>
                    <CartTd>{color}</CartTd>
                    <CartTd>{size}</CartTd>
                    <CartTd>{cost} &#8381;</CartTd>
                    <CartTd><BtnDelete onClick={() => delGoodFromCart(item)}>&times;</BtnDelete></CartTd>
                </tr>
            );
        })}
        </tbody>
    );
}
export default CartBody;