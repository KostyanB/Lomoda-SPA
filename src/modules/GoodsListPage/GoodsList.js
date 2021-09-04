import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { GoodPrewiewCard } from './GoodPreviewCard';

import { useSelector, useDispatch } from 'react-redux';
import { selectGoods, selectGoodsLists } from '../store/goodsSlice';


const GoodsListWrap = styled.ul`
    display: -ms-grid;
    display: grid;
    gap: 30px;
    /* -ms-grid-columns: (1fr)[4]; */
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1024px) {
        /* -ms-grid-columns: (1fr)[3]; */
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      /* -ms-grid-columns: (1fr)[2]; */
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    }
`;

export const GoodsList = () => {
    const {
        // dataBase: { menList, womenList, kidsList },
        hashSet: { hash }
    } = useContext(Context);

    // const goods = useSelector(selectGoods);
    const dispath = useDispatch();

    const goods = useSelector(selectGoodsLists);
    const { goodsList, menList, womenList, kidsList, categoryList } = goods;
    console.log('categoryList: ', categoryList);

    const currentList = (hash === 'men') ? menList : (hash === 'women') ? womenList : kidsList;

    return (
        <GoodsListWrap>
            {currentList.map(item => (
                <GoodPrewiewCard key={item.id} param={
                    {
                        id: item.id,
                        category: item.category,
                        brand: item.brand,
                        name: item.name,
                        cost: item.cost,
                        preview: item.preview,
                        sizes: item.sizes,
                    }
                }/>
            ))}
        </GoodsListWrap>
    );
}