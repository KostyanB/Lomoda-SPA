import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../env.json';
import { disableScroll, enableScroll } from '../Functions/scrollControl';
// elements
// import { ColGroup } from './CartElements';
import CartHead from './CartHead';
import CartBody from './CartBody';
import CartFoot from './CartFoot';
import { Button } from '../Styled/Button';
// store
import { setShowCart } from '../store/showCartSlice';
import { selectCart } from '../store/cartSlice';
import { selectGoodsObj } from '../store/goodsListSlice';


const CartOverlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
    -webkit-animation: fadeIn 300ms ease-in-out;
        animation: fadeIn 300ms ease-in-out;
`;
const Cart = styled.div`
    position: relative;
    max-width: 100%;
    min-height: 200px;
    border-radius: 8px;
    border: none;
    padding: 30px;
    background-color: #000;
    color: #fff;
    font-weight: 300;
`;
const CartTitle = styled.h2`
    text-align: left;
    font-size: 32px;
    margin-bottom: 15px;
`;
const TableWrapper = styled.div`
    overflow-y: auto;
    max-width: 100%;
`;
const CartTable = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    margin-bottom: 30px;
`;

const CartBtnBuy = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    color: #fff;
    background-color: #2796FF;
    -webkit-box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
            box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 32px;
`;
const CartBtnClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 3em;
    height: 3em;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    ::before, ::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 5px;
        left: 5px;
        border-bottom: 1px solid white;
        -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
                transform: rotate(45deg);
    }
    ::after {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
    }
    :focus::before, :hover::before, :focus::after, :hover::after {
        border-color: ${env.hoverColor};
    }
`;


const ModalCart = () => {

    const dispatch = useDispatch(),
        cart = useSelector(selectCart),
        goodsObj = useSelector(selectGoodsObj);

    const total = cart.reduce((acc, item) => (acc + +goodsObj[item.id].cost), 0);

    useEffect(() => disableScroll());

    const closeCart = e => {
        (e.target.id === 'overlay' || e.target.id === 'close-btn') && dispatch(setShowCart(false));
        enableScroll();
    };

    const sendOrder = () => {

    };

    return (
        <CartOverlay onClick={closeCart} id="overlay">
            <Cart>
                <CartTitle>Корзина</CartTitle>
                <TableWrapper>
                    <CartTable>
                        {/* <ColGroup/> */}
                        <CartHead/>
                        <CartBody/>
                        <CartFoot total={total}/>
                    </CartTable>
                </TableWrapper>
                <Button onClick={sendOrder}>Оформить</Button>
                <CartBtnClose onClick={closeCart} id="close-btn"/>
            </Cart>
        </CartOverlay>
    );
};
export default ModalCart;