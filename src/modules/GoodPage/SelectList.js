import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextGoodCard } from '../Functions/context';

const List = styled.ul`
    display: block;
    position: absolute;
    max-height: 150px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    border: 1px solid #000;
    border-top-color: #ccc;
    padding: 0;
`;
const Li = styled.li`
    padding: 8px;
    :hover {
        background-color: #ccc;
    }
`;

export const SelectList = props => {
    const { items, name } = props;
    const { openColor: { setOpenColorSelector },
        openSize: { setOpenSizeSelector },
        selectedColor: { setSelectColor },
        selectedSize: { setSelectSize },
        btnColorStyle: { setBtnColorStyle },
        btnSizeStyle: { setBtnSizeStyle },
    } = useContext(ContextGoodCard);

    const handleSelector = e => {
        if (name === 'colorsSelect') {
            setOpenColorSelector(false);
            setSelectColor(e.target.id);
            setBtnColorStyle('');
        }
        if (name === 'sizesSelect') {
            setOpenSizeSelector(false);
            setSelectSize(e.target.id);
            setBtnSizeStyle('');
        }
    };

    return (
        <List>
            {items.map(val => <Li key={val} id={val} onClick={handleSelector}>{val}</Li>)}
        </List>
    );
}