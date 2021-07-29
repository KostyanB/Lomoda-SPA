import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context, ContextGoodCard } from '../Functions/context';
import { Container } from '../Styled/Container';
import { GoodSelector } from './GoodSelector';
import { useOpenColorSelector } from '../Hooks/GoodPageHooks/useOpenColorSelector';
import { useOpenSizeSelector } from '../Hooks/GoodPageHooks/useOpenSizeSelector';
import { useSelectColor } from '../Hooks/GoodPageHooks/useSelectColor';
import { useSelectSize } from '../Hooks/GoodPageHooks/useSelectSize';
import { useBtnColorStyle } from '../Hooks/GoodPageHooks/useBtnColorStyle';
import { useBtnSizeStyle } from '../Hooks/GoodPageHooks/useBtnSizeStyle';
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

export const GoodCard = () => {
    const {
        selectedGood: { selectGood },
        // hashSet: { hash },
        // dataBase: { responce },
    } = useContext(Context);
    // const good = responce.filter(item => (item.id === hash) && item)[0];
    const { brand, color, cost, id, name, photo, sizes } = selectGood;

    const openColor = useOpenColorSelector(),
        openSize = useOpenSizeSelector(),
        selectedColor = useSelectColor(),
        selectedSize = useSelectSize(),
        btnColorStyle = useBtnColorStyle(),
        btnSizeStyle = useBtnSizeStyle();
    return (
        <ContextGoodCard.Provider value={{
            openColor,
            openSize,
            selectedColor,
            selectedSize,
            btnColorStyle,
            btnSizeStyle,
        }}>
            <section>
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
            </section>
        </ContextGoodCard.Provider>



    );
}
