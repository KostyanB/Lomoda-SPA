import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { OrderContext } from '../../context';
// elements
import Button from '../Styled/Button';

// styled components
const CartBtn = styled(Button).attrs({
  type: 'submit',
})``;

const CartButton = () => {
  const {
    sendButton: { disableSendButton, checkDisableSend },
  } = useContext(OrderContext);

  useEffect(() => {
    checkDisableSend();
  }, [checkDisableSend]);

  return (
    <CartBtn disable={disableSendButton} text='Оформить' form='phone_form' />
  );
};
export default CartButton;
