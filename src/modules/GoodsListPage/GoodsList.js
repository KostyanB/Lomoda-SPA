import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { GoodPrewiewCard } from './GoodPreviewCard';

import { useSelector, useDispatch } from 'react-redux';
import { selectGoods, selectGoodsLists, selectGoodsObj, selectCategoryList } from '../store/goodsListSlice';
import { goodPageSelect, selectedGood } from '../store/goodPageSlice';


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
        hashSet: { hash, handleHash },
        pageTitle: { setPageTitle },
        // dataBase: { responce },
        selectedGood: { setSelectGood }
    } = useContext(Context);

    const dispath = useDispatch();
    // const { goodsList, menList, womenList, kidsList, categoryList } = useSelector(selectGoodsLists);
    const goods = useSelector(selectGoods);
    const goodsObj = useSelector(selectGoodsObj);

    // const currentList = (hash === 'men') ? menList : (hash === 'women') ? womenList : kidsList;

    const currentList = useSelector(selectGoods).filter(item => item.category === hash);

    const handleGoodCard = id => {
        // const good = responce.filter(item => (item.id === idValue) && item)[0];
        // const good = goodsList.filter(item => (item.id === idValue) && item)[0];
        const good = goodsObj[id];
        handleHash(id);
        setPageTitle(`${good.name} "${good.brand}"`);
        setSelectGood(good);
        dispath(goodPageSelect(good));
    };

    return (
        <GoodsListWrap>
            {currentList.map(item => (
                <GoodPrewiewCard key={item.id}
                    handle={handleGoodCard}
                    param={item}/>
            ))}
        </GoodsListWrap>
    );
}