import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../env.json';
// elements
import CartHead from './CartHead';
import CartBody from './CartBody';
import CartFoot from './CartFoot';
import Button from '../Styled/Button';
// store
import { selectCart, selectCartTitle, setCartTitle } from '../store/cartSlice';
import { selectGoodsEntities } from '../store/goodsSlice';
import { selectDisableSendButton, checkDisableSend, setCartCheck } from '../store/sendButtonSlice';

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
    type: 'submit',
})``;

// ****************************************
const Order = () => {

    const dispatch = useDispatch(),
        cart = useSelector(selectCart),
        cartTitle = useSelector(selectCartTitle),
        goodsEntities = useSelector(selectGoodsEntities),
        disableSend = useSelector(selectDisableSendButton);

    const total = cart.reduce((acc, item) => (acc + +goodsEntities[item.id].cost), 0);

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
    // откл скролл, проверка корзины, вкл кнопки отправить
    useEffect(() => {
        checkCart();
        dispatch(checkDisableSend());
    });

    return (
        <>
        <CartTitle>{cartTitle}</CartTitle>
        <TableWrapper>
            <CartTable>
                <CartHead/>
                <CartBody/>
                <CartFoot total={total}/>
            </CartTable>
        </TableWrapper>
        <CartButton disable={disableSend}
            text="Оформить"
            form="phone_form"/>
        </>
    );
};
export default Order;