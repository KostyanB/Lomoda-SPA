import React from 'react';
import styled from 'styled-components';

const TitleWrapper  = styled.h2`
    margin-bottom: 15px;
    @media (max-width: 968px) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    }
    @media (max-width: 520px) {
        grid-column: 1/2;
        grid-row: 1;
    }
`;
const Title = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
`;
const Brand = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 15px;
`;

export const GoodTitle = ({ brand, name }) => (
    <TitleWrapper>
        <Brand>{brand}</Brand>
        <Title>{name}</Title>
    </TitleWrapper>
)