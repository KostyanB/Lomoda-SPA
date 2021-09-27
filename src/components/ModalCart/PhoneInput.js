import React, { useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-top: 5px;
`;
const Input = styled.input`
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    padding-left: 10px;
`;

const PhoneInput = ({ input }) => {
    return (
    <Form>
        <label htmlFor="phone__input"><span id="phone__label">Ваш телефон:   </span></label>
        <Input ref={input} id="phone__input" type="text" placeholder="+7 (***) ***-**-**"/>
    </Form>
);
}
export default PhoneInput;
