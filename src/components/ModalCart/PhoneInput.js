import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
    padding-left: 20px;
`;

const PhoneInput = () => (
    <Wrapper>
        <label htmlFor="phone__input"><span id="phone__label">Ваш телефон:   </span></label>
        <Input id="phone__input" type="text" placeholder="+7 (***) ***-**-**"/>
    </Wrapper>
)
export default PhoneInput;
