import React from 'react';
import styled from 'styled-components';

export const ColGroup = () => (
    <>
    <colgroup className="cart__col">
        <col className="cart__col-number"/>
        <col className="cart__col-name" style={{minWidth: '230px'}}/>
        <col className="cart__col-color"/>
        <col className="cart__col-size"/>
        <col className="cart__col-price" style={{minWidth: '100px'}}/>
        <col className="cart__col-delete"/>
    </colgroup>
    </>
)

export const CartTd = styled.td`
    border: 1px solid #fff;
    padding: 5px 10px;
`;
export const CartTh = styled.th`
    border: 1px solid #fff;
    padding: 5px 10px;
`;