import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../env.json';
import checkPhoneLength from '../Functions/checkPhoneLength';
// elements
import CartHead from './CartHead';
import CartBody from './CartBody';
import CartFoot from './CartFoot';
import { Button } from '../Styled/Button';
// store
import { selectCart, sendOrder, selectCartTitle, setCartTitle } from '../store/cartSlice';
import { selectGoodsEntities } from '../store/goodsSlice';
import { selectDisableSendButton, checkDisableSend, setPhoneCheck, setCartCheck } from '../store/sendButtonSlice';

// styled
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

// ****************************************
const Order = () => {

    const dispatch = useDispatch(),
        cart = useSelector(selectCart),
        cartTitle = useSelector(selectCartTitle),
        goodsEntities = useSelector(selectGoodsEntities),
        disableSend = useSelector(selectDisableSendButton),
        input = useRef();

    const total = cart.reduce((acc, item) => (acc + +goodsEntities[item.id].cost), 0);

    // отправка заказа
    const orderSend = () => {
        const data = {
            'tel' : input.current.value,
            'order': cart
        }
        dispatch(sendOrder(data));
    };
    // валидация длины телефона
    const chekPhone = () => {
        if (checkPhoneLength(input.current.value)) {
            dispatch(setPhoneCheck(true));
            input.current.className = 'valid';
        } else {
            dispatch(setPhoneCheck(false));
            input.current.className = '';
        }
        dispatch(checkDisableSend());
    };
    // валидация наличия товара в корзине
    const checkCart = () => {
        if (cart.length <= 0) {
            dispatch(setCartTitle('Корзина пуста!!!'));
            dispatch(setCartCheck(false));
        } else if (cart.length > 0) {
            dispatch(setCartTitle(env.initialStates.cart.initCartTitle));
            dispatch(setCartCheck(true));
        }
    };
    // откл скролл, проверка тел и корзины, вкл кнопки отправить
    useEffect(() => {
        checkCart();
        chekPhone();
        dispatch(checkDisableSend());
    });

    return (
        <>
        <CartTitle>{cartTitle}</CartTitle>
        <TableWrapper>
            <CartTable>
                <CartHead/>
                <CartBody/>
                <CartFoot total={total} input={input} chekPhone={chekPhone}/>
            </CartTable>
        </TableWrapper>
        <Button disabled={disableSend} onClick={orderSend}>Оформить</Button>
        </>
    );
};
export default Order;