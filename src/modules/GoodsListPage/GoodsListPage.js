import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { Container } from '../Styled/Container';
import { GoodsList } from './GoodsList';

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
    const {
        pageNameSet: { pageName },
    } = useContext(Context);

    return (
        <Goods>
            <Container>
                    <GoodsTitle>{pageName}</GoodsTitle>
                    <GoodsList/>
            </Container>
        </Goods>
    );
}