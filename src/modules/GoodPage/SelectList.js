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
    const { openColor: { openColorSelector, setOpenColorSelector },
        openSize: { openSizeSelector, setOpenSizeSelector }
        } = useContext(ContextGoodCard);
    // const { openSelect: { openSelector, setOpenSelector } } = useContext(ContextGoodCard);
    console.log('items: ', items);

    const handleSelector = () => {
        (name === 'colorsSelect') && setOpenColorSelector(false);
        (name === 'sizesSelect') && setOpenSizeSelector(false);
    };

    return (
        <List>
            {items.map(val => <Li key={val} onClick={() => handleSelector()}>{val}</Li>)}
        </List>
    );
}