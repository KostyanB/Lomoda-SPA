import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import env from '../../env.json';
//components
import Icons from '../Styled/Icons';
//store
import { selectCartBtnTitle, setShowCart } from '../../store/cartSlice';
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
    background: none;
    padding-left: 28px;
    border: none;
    width: max-max-content;

    :hover, :hover > svg, :active, :active > svg {
        color: ${env.hoverColor};
        stroke: ${env.hoverColor};
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
    }
`;

const CartButton = () => {

    const dispatch = useDispatch(),
        cartBtnTitle = useSelector(selectCartBtnTitle);

    const openCart = () => dispatch(setShowCart(true));

    return (
        <Button onClick={openCart}>
            <Icons name="cart" width={24} height={24} stroke="#888" />
            {cartBtnTitle}
        </Button>
    );
}
export default CartButton;