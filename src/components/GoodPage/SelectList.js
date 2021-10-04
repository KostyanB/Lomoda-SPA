import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

import { useDispatch} from 'react-redux';
import { setSelectedColor, setSelectedSize } from '../store/selectedParamSlice';
import { setColorInit, setSizeInit, checkDisableBuy } from '../store/buyButtonSlice';

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
    cursor: pointer;
    :hover {
        background-color: #ccc;
        color: #2796FF;
    }
`;

const SelectList = ({ items, name }) => {

    const { openSelector: { setOpenColorSelector, setOpenSizeSelector },
        openButton: { setOpenBtnColor, setOpenBtnSize },
    } = useContext(Context);

    const dispatch = useDispatch();

    const handleSelectColor = id => {
        setOpenColorSelector(false);
        setOpenBtnColor(false);
        dispatch(setSelectedColor(id));
        dispatch(setColorInit(true));
    };

    const handleSelectSize = id => {
        setOpenSizeSelector(false);
        setOpenBtnSize(false);
        dispatch(setSelectedSize(id));
        dispatch(setSizeInit(true));
    };

    const handleSelectors = e => {
        if (name === 'colorsSelect') handleSelectColor(e.target.id)
        if (name === 'sizesSelect') handleSelectSize(e.target.id)
        dispatch(checkDisableBuy());
    };

    return (
        <List>
            {items.map(val => <Li key={val} id={val} onClick={handleSelectors}>{val}</Li>)}
        </List>
    );
}
export default SelectList;