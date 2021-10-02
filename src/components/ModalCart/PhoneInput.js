import React, {useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import env from '../../env.json';
//functions
import maskPhone from '../Functions/maskPhone';
import checkPhoneLength from '../Functions/checkPhoneLength';
// store
import { selectCart, sendOrder } from '../store/cartSlice';
import { checkDisableSend, setPhoneCheck } from '../store/sendButtonSlice';

// styled components
const Form = styled.form`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    input {
        color: #f93c00;
        padding-left: 5px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    }
    .valid {
        color: ${env.hoverColor} !important;
    }
    label {
        padding-right: 5px;
    }
`;
//***************************************
const PhoneInput = () => {

    const dispatch = useDispatch(),
        cart = useSelector(selectCart),
        input = useRef();

    useEffect(() => {
        maskPhone(input.current);
        chekPhone();
    });
    // отправка заказа
    const handleSubmit = e => {
        e.preventDefault();
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

    return (
        <Form id="phone_form" onSubmit={handleSubmit}>
            <label htmlFor="phone_input">Ваш телефон:</label>
            <input ref={input}
                id="phone_input"
                type="text"
                placeholder="+7 (***) ***-**-**"
                onChange={chekPhone}
                onBlur={chekPhone}
            />
        </Form>
    );
}
export default PhoneInput;
