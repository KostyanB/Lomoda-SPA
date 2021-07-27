import React from 'react';
import styled from 'styled-components';
import { SelectWrapper, GoodSelectBtn, GoodSelectOpenBtn } from './SelectorElements';
import { SelectList } from './SelectList';

const ColorWrapper = styled(SelectWrapper)`
    margin-bottom: 15px;
    @media (max-width: 968px) {
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
        grid-row: 1/2;
    }
`;
const SizesWrapper = styled(SelectWrapper)`
    margin-bottom: 30px;
    @media (max-width: 968px) {
        -ms-grid-row: 2;
        -ms-grid-row-span: 1;
        grid-row: 2/3;
    }
`;


export const GoodSelector = props => {
    const { name, param } = props;

    return (
        <>
        {(name === 'colorList') &&
            <ColorWrapper>
                <GoodSelectBtn>Выберите цвет</GoodSelectBtn>
                <SelectList items={param}/>
            </ColorWrapper>
        }
        {(name === 'sizeList') &&
            <SizesWrapper>
                <GoodSelectBtn>Выберите размер</GoodSelectBtn>
                <SelectList items={param}/>
            </SizesWrapper>
        }
        </>
    );
}