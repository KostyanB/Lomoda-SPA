import React from 'react';
import styled from 'styled-components';
import Icons from '../Styled/Icons';
import env from '../../env.json';
import { useDispatch } from 'react-redux';
import { setShowCart } from '../store/showCartSlice';

const Button = styled.button`
    -ms-grid-column-align: end;
        justify-self: end;
    display: -webkit-box;
        display: -ms-flexbox;
            display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background: none;
    padding-left: 28px;
    border: none;

    :hover, :hover > svg, :active, :active > svg {
        color: ${env.hoverColor};
        stroke: ${env.hoverColor};
    }

    @media (max-width: 768px) {
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2 / 3;
    }

    @media (max-width: 480px) {
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
    }
`;

export const CartButton = () => {

    const dispatch = useDispatch();

    const openCart = () => dispatch(setShowCart(true));

    return (
        <Button onClick={openCart}>
            <Icons name="cart" width={24} height={24} stroke="#888" />
            Корзина
        </Button>
    )
}