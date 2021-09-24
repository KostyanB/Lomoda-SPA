import React from 'react';
import styled from 'styled-components';
import { Preview } from './Preview';
import { Link } from 'react-router-dom';

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

// ----------------------------------------------------------------
export const GoodPrewiewCard = ({ param }) => {
    const { brand, cost, id, name, preview, sizes } = param;

    return (
        <ItemWrap>
            <Good>
                <Link to={`/card/${id}`}>
                    <Preview src={preview} alt={name}/>
                </Link>
                <GoodDescription>
                    <GoodPrice>{cost} &#8381;</GoodPrice>
                    <GoodTitle>{brand}<TitleSpan>/ {name}</TitleSpan>
                    </GoodTitle>
                    {(sizes) &&
                        <GoodSizes>Размеры (RUS): <span>{sizes.join(' ')}</span></GoodSizes>
                    }
                    <Link to={`/card/${id}`} className="good-link">
                        Подробнее
                    </Link>
                </GoodDescription>
            </Good>
        </ItemWrap>
    );
}