import React from 'react';
import styled from 'styled-components';

const Price = styled.p`
    margin-bottom: 30px;
    @media (max-width: 968px) {
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2/3;
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
        grid-row: 1/2;
    }
    @media (max-width: 520px) {
        grid-column: 1/2;
        grid-row: 2;
        margin-bottom: 10px;
    }
`;

export const GoodPrice = ({ cost }) => (
    <>
    <Price>{cost} ₽</Price>
    </>
)