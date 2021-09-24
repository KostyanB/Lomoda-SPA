import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import { GoodsList } from './GoodsList';
import Page404 from '../Page404/Page404';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods, selectNameList } from '../store/goodsListSlice';
import { setPageTitle } from '../store/pageTitleSlice';

const Goods = styled.section`
    padding-bottom: 30px;
`;
const GoodsTitle = styled.h2`
    margin-bottom: 30px;
    @media (max-width: 480px) {
        text-align: center;
    }
`;

const GoodsListPage = () => {

    const dispatch = useDispatch(),
        { list } = useParams(),
        nameList = useSelector(selectNameList),
        goods = useSelector(selectGoods),
        pageName = nameList[list] ? nameList[list] : '';

    const currentList = (list === 'all') ? goods : goods.filter(item => item.category === list);

    useEffect(() => dispatch(setPageTitle(`Lomoda ${pageName}`)));

    return (
        <Goods>
            <Container>
            {(currentList.length === 0) ?
                <Page404/> :
                <>
                    <GoodsTitle>{pageName}</GoodsTitle>
                    <GoodsList currentList={currentList}/>
                </>
            }
            </Container>
        </Goods>
    );
};
export default GoodsListPage;