import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../env.json';
import { disableScroll, enableScroll } from '../Functions/scrollControl';
// components
import Order from './Order';
import Message from './Message';
// store
import { setShowCart, resetCart, selectShowOrder, selectShowMessage } from '../store/cartSlice';
// styled
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
    display: flex;
    flex-direction: column;
    justify-content: center;
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

// ****************************************
const ModalCart = () => {

    const dispatch = useDispatch(),
        showOrder = useSelector(selectShowOrder),
        showMessage = useSelector(selectShowMessage);
    // закрытие корзины и сброс
    const closeCart = e => {
        if (e.target.id === 'overlay' || e.target.id === 'close-btn') {
            dispatch(setShowCart(false));
            enableScroll();
            dispatch(resetCart());
        }
    };
    // откл скролл
    useEffect(() => disableScroll());

    return (
        <CartOverlay onClick={closeCart} id="overlay">
            <Cart>
                {showOrder && <Order/>}
                {showMessage && <Message/>}
                <CartBtnClose onClick={closeCart} id="close-btn"/>
            </Cart>
        </CartOverlay>
    );
};
export default ModalCart;