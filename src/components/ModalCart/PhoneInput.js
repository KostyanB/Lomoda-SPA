import React, {useEffect} from 'react';
import styled from 'styled-components';
import maskPhone from '../Functions/maskPhone';
import env from '../../env.json';

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

const PhoneInput = ({ input, chekPhone }) => {

    useEffect(() => maskPhone(input.current));

    return (
        <Form>
            <label htmlFor="phone__input">Ваш телефон:</label>
            <input ref={input}
                id="phone__input"
                type="text"
                placeholder="+7 (***) ***-**-**"
                onChange={chekPhone}
                onBlur={chekPhone}
            />
        </Form>
    );
}
export default PhoneInput;
