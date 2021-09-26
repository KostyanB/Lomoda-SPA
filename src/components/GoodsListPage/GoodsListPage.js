import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// elements
import { Container } from '../Styled/Container';
import { GoodsList } from './GoodsList';
import Page404 from '../Page404';
import checkActiveNav from '../Functions/checkActiveNav';
// store
import { selectGoods, selectNameList } from '../store/goodsListSlice';
import { setPageTitle } from '../store/pageTitleSlice';

const Goods = styled.section`
    padding-bottom: 30px;
`;

const GoodsListPage = () => {

    const dispatch = useDispatch(),
        { list } = useParams(),
        nameList = useSelector(selectNameList),
        goods = useSelector(selectGoods),
        pageName = nameList[list] ? nameList[list] : '';

    const currentList = (list === 'all') ? goods : goods.filter(item => item.category === list);

    // ставим тайтл
    useEffect(() => dispatch(setPageTitle(`Lomoda ${pageName}`)));
    // подсвечиваем активную ссылку в nav
    useEffect(() => checkActiveNav());

    return (
        <Goods>
            <Container>
            {(currentList.length === 0) ?
                <Page404/> :
                <GoodsList currentList={currentList}/>
            }
            </Container>
        </Goods>
    );
};
export default GoodsListPage;