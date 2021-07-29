import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import more from '../../image/more.svg';


const ItemWrap = styled.li`
    -ms-grid-column-align: center;
    justify-self: center;
`;
const Good = styled.article`
    -webkit-box-shadow: 0px 0px 3px #ccc;
        box-shadow: 0px 0px 3px #ccc;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    :hover {
    -webkit-box-shadow: 0px 0px 5px #aaa;
        box-shadow: 0px 0px 5px #aaa;
    }
    @media (max-width: 480px) {
        max-width: 320px;
    }
`;
const GoodDescription = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    /* -ms-grid-rows: (auto)[4]; */
        grid-template-rows: repeat(4, auto);
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: end;
    height: 100%;
    padding: 15px;
    text-align: center;
    font-size: 13px;
`;
const GoodPrice = styled.p`
    font-weight: 700;
    margin-bottom: 10px;
    text-align: left;
`;
const GoodTitle = styled.h3`
    font-weight: 400;
    margin-bottom: 10px;
    text-align: left;
`;
const TitleSpan = styled.span`
    color: #888;
`;
const GoodSizes = styled.p`
    margin-bottom: 10px;
    color: #888;
    text-align: left;
`;
const GoodLink = styled.a`
    -ms-flex-item-align: end;
        -ms-grid-row-align: end;
        align-self: end;
    background-image: url(${more});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    margin: 0 auto;
    padding-left: 20px;
`;

const Preview = props => <img className="good__img" src={`db/goods-image/${props.src}`} alt={props.alt}/>;

// const ImgLink = props => <a className="good__link-img" href={`#${props.id}`}><Preview src={props.src} alt={props.alt}/></a>;

// ----------------------------------------------------------------
export const GoodPrewiewCard = props => {
    const { brand, cost, id, name, preview, sizes } = props.param;

    const {
        hashSet: { setHash },
        pageShow: { checkShowPage },
        pageTitle: { setPageTitle },
        dataBase: { responce },
        selectedGood: { setSelectGood }
    } = useContext(Context);

    const HandleGoodCard = idValue => {
        const good = responce.filter(item => (item.id === idValue) && item)[0];
        setHash(idValue);
        checkShowPage('card');
        setPageTitle(`${good.name} "${good.brand}"`);
        setSelectGood(good);
    };

    return (
        <ItemWrap>
            <Good>
                <a className="good__link-img" href={`#${id}`} onClick={() => HandleGoodCard(id)}>
                    <Preview src={preview} alt={name}/>
                </a>
                {/* <a className="good__link-img" href={`#${props.id}`}>
                    <img className="good__img" src={`db/goods-image/${props.preview}`} alt={props.name}/>
                </a> */}
                <GoodDescription>
                    <GoodPrice>{cost} &#8381;</GoodPrice>
                    <GoodTitle>{brand}<TitleSpan>/ {name}</TitleSpan>
                    </GoodTitle>
                    {(sizes) &&
                        <GoodSizes>Размеры (RUS): <span>{sizes.join(' ')}</span></GoodSizes>
                    }
                    <GoodLink href={`#${id}`} onClick={() => HandleGoodCard(id)}>Подробнее</GoodLink>
                </GoodDescription>
            </Good>
        </ItemWrap>
    );
}