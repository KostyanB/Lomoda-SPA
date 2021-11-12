import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// elements
import Button from '../Styled/Button';
// store
import {
    selectSelectedColor,
    selectSelectedSize,
    selectSelectedId
} from '../../store/selectedParamSlice';
import {
    selectDisableBuyButton,
    selectBuyButtonText
} from '../../store/buyButtonSlice';
import { addGood } from '../../store/cartSlice';

// ******************************************
const BuyButton = () => {
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
        <>
            <Button disable={disableBuyButton}
                handle={handleGoodCart}
                text={buyButtonText}/>
        </>
    )
}
export default BuyButton;