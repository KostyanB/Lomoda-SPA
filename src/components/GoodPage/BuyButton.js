import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// elements
import Button from '../Styled/Button';
import { GoodPageContext } from '../../context';

// store
import {
  selectSelectedColor,
  selectSelectedSize,
  selectSelectedId,
} from '../../store/selectedParamSlice';
import { addGood, delGood, selectCart } from '../../store/cartSlice';

// ******************************************
const BuyButton = () => {
  const dispatch = useDispatch();
  // const disableBuyButton = useSelector(selectDisableBuyButton);
  const selectedColor = useSelector(selectSelectedColor);
  const selectedSize = useSelector(selectSelectedSize);
  const selectedId = useSelector(selectSelectedId);
  const cart = useSelector(selectCart);

  const {
    buyButton: { disableBuyButton, checkDisableBuy },
  } = useContext(GoodPageContext);

  const [btnText, setBtnText] = useState('');
  const [goodCheck, setGoodCheck] = useState(true);

  useEffect(() => {
    const isGoodInCart = cart.find(
      good =>
        good.id === selectedId &&
        (good.size === '-' || good.size === selectedSize) &&
        (good.color === '-' || good.color === selectedColor),
    );

    if (isGoodInCart) {
      setGoodCheck(true);
      setBtnText('Удалить из корзины');
    } else {
      setGoodCheck(false);
      setBtnText('Добавить в корзину');
    }

    checkDisableBuy();
  }, [cart, selectedColor, selectedId, selectedSize, checkDisableBuy]);

  // товар в/из корзины
  const createGoodObj = () => ({
    id: selectedId,
    size: selectedSize,
    color: selectedColor,
  });

  const handleAddGoodToCart = () =>
    goodCheck
      ? dispatch(delGood(createGoodObj()))
      : dispatch(addGood(createGoodObj()));

  return (
    <Button
      disable={disableBuyButton}
      handle={handleAddGoodToCart}
      text={btnText}
    />
  );
};
export default BuyButton;
