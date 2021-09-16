import React from 'react';
import styled from 'styled-components';
import { ContextGoodCard } from '../Functions/context';
import { Container } from '../Styled/Container';
import { GoodSelector } from './GoodSelector';
import { useOpenSelector } from '../Hooks/GoodPageHooks/useOpenSelector';
import { useBtnStyle } from '../Hooks/GoodPageHooks/useBtnStyle';

import { useSelector } from 'react-redux';
import { selectedGood } from '../store/goodPageSlice';

const GoodWrapper = styled(Container)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 30px;
    @media (max-width: 968px) {
        -webkit-box-pack: center;
            /* -ms-flex-pack: center; */
        justify-content: center;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    }
`;
const ImageWrapper = styled.div`
    max-width: 750px;
`;
const GoodDescription = styled.div`
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 750px;
    -ms-flex-preferred-size: 280px;
        flex-basis: 280px;
    @media (max-width: 968px) {
        display: -ms-grid;
        display: grid;
        gap: 20px;
    }
`;
const GoodTitleWrapper  = styled.h2`
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
        grid-column: auto;
        grid-row: auto;
    }
`;
const GoodTitle = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
`;
const GoodBrand = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 15px;
`;
const GoodPrice = styled.p`
    margin-bottom: 30px;
    @media (max-width: 968px) {
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2/3;
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
        grid-row: 1/2;
    }
    @media (max-width: 520px) {
        grid-column: auto;
        grid-row: auto;
    }
`;
const BuyButton = styled.button`
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    color: #fff;
    background-color: #2796FF;
    -webkit-box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
            box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 32px;
    :hover {
        color: #2796FF;
        background-color: #fff;
    }
    :active {
        -webkit-box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
            box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
    }
    @media (max-width: 968px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        -ms-grid-row: 3;
        -ms-grid-row-span: 1;
        grid-row: 3/4;
    }
    @media (max-width: 520px) {
        grid-column: auto;
        grid-row: auto;
    }
`;

export const GoodPage = () => {

    const selectGood = useSelector(selectedGood);
    const { brand, color, cost, name, photo, sizes } = selectGood;

    const openSelector = useOpenSelector(),
        btnStyle = useBtnStyle();

    return (
        <ContextGoodCard.Provider value={{
            openSelector,
            btnStyle,
        }}>
                <GoodWrapper>
                    <ImageWrapper>
                        <img className="card-good__image" src={`db/goods-image/${photo}`} alt={name}/>
                    </ImageWrapper>
                    <GoodDescription>
                        <GoodTitleWrapper>
                            <GoodBrand>{brand}</GoodBrand>
                            <GoodTitle>{name}</GoodTitle>
                        </GoodTitleWrapper>
                        <GoodPrice>{cost} ₽</GoodPrice>
                        {color && <GoodSelector name="colorList" param={color}/>}
                        {sizes && <GoodSelector name="sizeList" param={sizes}/>}
                        <BuyButton>Добавить в корзину</BuyButton>
                    </GoodDescription>
                </GoodWrapper>
        </ContextGoodCard.Provider>
    );
}
