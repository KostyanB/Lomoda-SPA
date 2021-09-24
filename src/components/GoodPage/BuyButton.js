import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { selectSelectedColor, selectSelectedSize } from '../store/selectedParamSlice';
import { selectDisableBuyButton, selectBuyButtonText } from '../store/buyButtonSlice';

const Button = styled.button`
    width: 100%;
    height: 48px;
    box-sizing: border-box;
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
    :hover {
        color: #2796FF;
        background-color: #fff;
    }
    :active {
        -webkit-box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
            box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
    }
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

    const disableBuyButton = useSelector(selectDisableBuyButton);
    const buyButtonText = useSelector(selectBuyButtonText);
    const selectedColor = useSelector(selectSelectedColor);
    const selectedSize = useSelector(selectSelectedSize);

    // товар в/из корзины
    const handleGoodToCart = () => {
        console.log('selectedColor: ', selectedColor);
        console.log('selectedSize: ', selectedSize);
    };

    return (
        <Button disabled={disableBuyButton} onClick={handleGoodToCart}>
            {buyButtonText}
        </Button>
    )
}