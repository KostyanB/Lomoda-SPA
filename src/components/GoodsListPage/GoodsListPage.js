import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import env from '../../env.json';
// elements
import { Container } from '../Styled/Container';
import { GoodsList } from './GoodsList';
import Page404 from '../Page404';
//functions
import checkActiveNav from '../../functions/checkActiveNav';
// store
import { setPageTitle } from '../../store/pageTitleSlice';
import { selectAllGoods } from '../../store/goodsSlice';


const Goods = styled.section`
    padding-bottom: 30px;
`;

const GoodsListPage = () => {

    const dispatch = useDispatch(),
        { list } = useParams(),
        names = env.categoryNames,
        goods = useSelector(selectAllGoods);

    const currentList = (list === 'all') ? goods : goods.filter(item => item.category === list);

    // ставим тайтл
    useEffect(() => dispatch(setPageTitle(`Lomoda ${names[list] ? names[list] : ''}`)), [dispatch, names, list]);
    // подсвечиваем активную ссылку в nav
    useEffect(() => checkActiveNav());

    return (
        <Goods>
            <Container>
            {(currentList.length > 0) ?
                <GoodsList currentList={currentList}/> :
                <Page404/>
            }
            </Container>
        </Goods>
    );
};
export default GoodsListPage;