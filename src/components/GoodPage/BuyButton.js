import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// elements
import { Button } from '../Styled/Button';
// store
import { selectSelectedColor, selectSelectedSize, selectSelectedId } from '../store/selectedParamSlice';
import { selectDisableBuyButton, selectBuyButtonText } from '../store/buyButtonSlice';
import { addGood, delGood, clearCart, selectCart } from '../store/cartSlice';

const GoodButton = styled(Button)`

    @media (max-width: 968px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        -ms-grid-row: 3;
        -ms-grid-row-span: 1;
        grid-row: 2;
    }
    @media (max-width: 520px) {
        grid-column: 1/3;
        grid-row: 3;
        margin-bottom: 20px;
    }
`;

// ------------------------------
export const BuyButton = () => {
    const dispatch = useDispatch(),
        disableBuyButton = useSelector(selectDisableBuyButton),
        buyButtonText = useSelector(selectBuyButtonText),
        selectedColor = useSelector(selectSelectedColor),
        selectedSize = useSelector(selectSelectedSize),
        selectedId = useSelector(selectSelectedId);

    // товар в/из корзины
    const handleGoodCart = () => {
        const newGood = {
            'id': selectedId,
            'size': selectedSize,
            'color': selectedColor,
        }
        dispatch(addGood(newGood));
    };

    return (
        <GoodButton disabled={disableBuyButton} onClick={handleGoodCart}>
            {buyButtonText}
        </GoodButton>
    )
}