import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { GoodPrewiewCard } from './GoodPreviewCard';

import { useSelector, useDispatch } from 'react-redux';
import { selectGoods, selectGoodsObj } from '../store/goodsListSlice';
import { setSelectedGood } from '../store/goodPageSlice';
import { setPageTitle } from '../store/pageTitleSlice';

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
        hashSet: { hash, handleHash },
    } = useContext(Context);

    const dispatch = useDispatch();
    const goodsObj = useSelector(selectGoodsObj);

    const currentList = useSelector(selectGoods).filter(item => item.category === hash);

    const handleGoodCard = val => {
        const good = goodsObj[val];
        handleHash(val);
        dispatch(setPageTitle(`${good.name} "${good.brand}"`))
        dispatch(setSelectedGood(good));
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