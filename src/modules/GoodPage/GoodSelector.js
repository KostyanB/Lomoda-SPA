import React, { useContext } from 'react';
import styled from 'styled-components';
import { SelectWrapper, GoodSelectBtn, GoodSelectOpenBtn } from './SelectorElements';
import { SelectList } from './SelectList';
import { ContextGoodCard } from '../Functions/context';

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
    const { openColor: { openColorSelector, setOpenColorSelector, toggleColorSelect },
        openSize: { openSizeSelector, setOpenSizeSelector, toggleSizeSelect }
        } = useContext(ContextGoodCard);
    const handleColor = () => {
        toggleColorSelect();
        setOpenSizeSelector(false);
    };
    const handleSize = () => {
        toggleSizeSelect();
        setOpenColorSelector(false);
    };

    return (
        <>
        {(name === 'colorList') &&
            <ColorWrapper>
                <GoodSelectBtn onClick={() => handleColor()}>Выберите цвет</GoodSelectBtn>
                {openColorSelector && <SelectList items={param} name="colorsSelect"/>}
            </ColorWrapper>
        }
        {(name === 'sizeList') &&
            <SizesWrapper>
                <GoodSelectBtn onClick={() => handleSize()}>Выберите размер</GoodSelectBtn>
                {openSizeSelector && <SelectList items={param} name="sizesSelect"/>}
            </SizesWrapper>
        }
        </>
    );
}