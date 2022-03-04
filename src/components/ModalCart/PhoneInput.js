import React, { useEffect, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import env from '../../env.json';
//functions
import maskPhone from '../../functions/maskPhone';
import checkPhoneLength from '../../functions/checkPhoneLength';
//context
import { OrderContext } from '../../context';
// store
import { selectCart, sendOrder } from '../../store/cartSlice';

// styled components
const Form = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5px;

  & > input {
    color: #f93c00;
    padding-left: 5px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .valid {
    color: ${env.hoverColor} !important;
  }

  & > label {
    padding-right: 5px;
  }
`;

const PhoneInput = () => {
  const dispatch = useDispatch(),
    cart = useSelector(selectCart),
    input = useRef();

  const {
    sendButton: { setPhoneCheck },
  } = useContext(OrderContext);

  useEffect(() => {
    maskPhone(input.current);
    chekPhone();
  });
  // отправка заказа
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      tel: input.current.value,
      order: cart,
    };
    dispatch(sendOrder(data));
  };
  // валидация длины телефона
  const chekPhone = () => {
    if (checkPhoneLength(input.current.value)) {
      setPhoneCheck(true);
      input.current.className = 'valid';
    } else {
      setPhoneCheck(false);
      input.current.className = '';
    }
  };

  return (
    <Form id='phone_form' onSubmit={handleSubmit}>
      <label htmlFor='phone_input'>Ваш телефон:</label>
      <input
        ref={input}
        id='phone_input'
        type='text'
        placeholder='+7 (***) ***-**-**'
        onChange={chekPhone}
        onBlur={chekPhone}
        onInput={chekPhone}
      />
    </Form>
  );
};
export default PhoneInput;
