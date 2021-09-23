import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import { GoodsList } from './GoodsList';

import { useSelector } from 'react-redux';
import { selectPageName } from '../store/pageNameSlice';


const Goods = styled.section`
    padding-bottom: 30px;
`;
const GoodsTitle = styled.h2`
    margin-bottom: 30px;
    @media (max-width: 480px) {
        text-align: center;
    }
`;

export const GoodsListPage = () => {

    const pageName = useSelector(selectPageName)

    return (
        <Goods>
            <Container>
                    <GoodsTitle>{pageName}</GoodsTitle>
                    <GoodsList/>
            </Container>
        </Goods>
    );
}