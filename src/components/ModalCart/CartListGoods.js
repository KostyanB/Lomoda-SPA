import React from 'react';
import styled from 'styled-components';
import { CartTd } from './CartElements';

const BtnDelete = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: 700;
    :hover {
        color: #f93c00;
        text-shadow: 0 0 3px #f93c00;
    }
`;

export const CartListGoods = () => {

    return (
                    <>
                        <tr>
                            <CartTd>1</CartTd>
                            <CartTd>New Balance Леггинсы NB Essentials Botanical Legging</CartTd>
                            <CartTd>-</CartTd>
                            <CartTd>42/44</CartTd>
                            <CartTd>2999 &#8381;</CartTd>
                            <CartTd><BtnDelete>&times;</BtnDelete></CartTd>
                        </tr>
                        <tr>
                            <CartTd>2</CartTd>
                            <CartTd>Adidas Костюм спортивный W TS CO ENERGIZ</CartTd>
                            <CartTd>-</CartTd>
                            <CartTd>42/44</CartTd>
                            <CartTd>7999 &#8381;</CartTd>
                            <CartTd><BtnDelete>&times;</BtnDelete></CartTd>
                        </tr>
                        <tr>
                            <CartTd>3</CartTd>
                            <CartTd>Befree Топ Exclusive online</CartTd>
                            <CartTd>Фиолетовый</CartTd>
                            <CartTd>42</CartTd>
                            <CartTd>599 &#8381;</CartTd>
                            <CartTd><BtnDelete>&times;</BtnDelete></CartTd>
                        </tr>
                    </>
    );
}