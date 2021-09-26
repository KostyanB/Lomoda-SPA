import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// component
import { SelectWrapper, GoodSelectBtn } from './SelectorElements';
import { SelectList } from './SelectList';
import { Context } from './Context';
//store
import { selectSelectedColor, selectSelectedSize } from '../store/selectedParamSlice';

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

export const GoodSelector = ({ name, param }) => {

    const { openSelector: {
            openColorSelector, setOpenColorSelector, toggleColorSelect,
            openSizeSelector, setOpenSizeSelector, toggleSizeSelect
        },
        btnStyle: {
            toggleBtnColor, toggleBtnSize, btnColorStyle,
            setBtnColorStyle, btnSizeStyle, setBtnSizeStyle
        },
    } = useContext(Context);

    const selectedColor = useSelector(selectSelectedColor),
        selectedSize = useSelector(selectSelectedSize);

    const handleColor = () => {
        toggleColorSelect();
        setOpenSizeSelector(false);
        toggleBtnColor();
        setBtnSizeStyle('');
    };
    const handleSize = () => {
        toggleSizeSelect();
        setOpenColorSelector(false);
        toggleBtnSize();
        setBtnColorStyle('');
    };

    return (
        <>
        {(name === 'colorList') &&
            <ColorWrapper>
                <GoodSelectBtn className={btnColorStyle} key="colorBtn" onClick={() => handleColor()}>
                    {selectedColor}
                </GoodSelectBtn>
                {openColorSelector && <SelectList items={param} name="colorsSelect"/>}
            </ColorWrapper>
        }
        {(name === 'sizeList') &&
            <SizesWrapper>
                <GoodSelectBtn className={btnSizeStyle} key="sizeBtn" onClick={() => handleSize()}>
                    {selectedSize}
                </GoodSelectBtn>
                {openSizeSelector && <SelectList items={param} name="sizesSelect"/>}
            </SizesWrapper>
        }
        </>
    );
}