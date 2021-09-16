import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextGoodCard } from '../Functions/context';

import { useDispatch} from 'react-redux';
import { setSelectedColor, setSelectedSize } from '../store/selectedGoodSlice';

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

export const SelectList = ({ items, name }) => {

    const { openSelector: { setOpenColorSelector, setOpenSizeSelector },
        btnStyle: { setBtnColorStyle, setBtnSizeStyle },
    } = useContext(ContextGoodCard);

    const dispatch = useDispatch();

    const handleSelector = e => {
        if (name === 'colorsSelect') {
            setOpenColorSelector(false);
            dispatch(setSelectedColor(e.target.id));
            setBtnColorStyle('');
        }
        if (name === 'sizesSelect') {
            setOpenSizeSelector(false);
            dispatch(setSelectedSize(e.target.id));
            setBtnSizeStyle('');
        }
    };

    return (
        <List>
            {items.map(val => <Li key={val} id={val} onClick={handleSelector}>{val}</Li>)}
        </List>
    );
}