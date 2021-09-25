import React from 'react';
import styled from 'styled-components';
import { ColumnIcons, ColumnTitle } from './FooterElems';
import mcardImg from '../../image/icon-mastercard.svg';
import visaImg from '../../image/icon-visa.svg';
import mirImg from '../../image/icon-mir.svg';

const Icon = styled.li`
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
const Mcard = styled(Icon)`
    width: 43px;
    height: 28px;
    background-image: url(${mcardImg});
`;
const Visa = styled(Icon)`
    width: 49px;
    height: 16px;
    background-image: url(${visaImg});
`;
const Mir = styled(Icon)`
    width: 57px;
    height: 16px;
    background-image: url(${mirImg});
`;

export const CardIcons = () => (
    <>
    <ColumnTitle>Способы оплаты</ColumnTitle>
    <ColumnIcons>
        <Mcard/>
        <Visa/>
        <Mir/>
    </ColumnIcons>
    </>
)