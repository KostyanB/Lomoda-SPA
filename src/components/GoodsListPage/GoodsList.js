import React from 'react';
import styled from 'styled-components';
import { GoodPrewiewCard } from './GoodPreviewCard';

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

export const GoodsList = ({ currentList }) => {

    return (
        <GoodsListWrap>
            {currentList.map(item => (
                <GoodPrewiewCard key={item.id}
                    param={item}/>
            ))}
        </GoodsListWrap>
    );
}