import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoodPageContext } from '../../context';

import { useDispatch } from 'react-redux';
import {
  setSelectedColor,
  setSelectedSize,
} from '../../store/selectedParamSlice';

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
    color: #2796ff;
  }
`;

const SelectList = ({ items, name }) => {
  const {
    openSelector: { setOpenColorSelector, setOpenSizeSelector },
    openButton: { setOpenBtnColor, setOpenBtnSize },
    buyButton: { setColorCheck, setSizeCheck },
  } = useContext(GoodPageContext);

  const dispatch = useDispatch();

  const handleSelectColor = id => {
    setOpenColorSelector(false);
    setOpenBtnColor(false);
    setColorCheck(true);
    dispatch(setSelectedColor(id));
  };

  const handleSelectSize = id => {
    setOpenSizeSelector(false);
    setOpenBtnSize(false);
    setSizeCheck(true);
    dispatch(setSelectedSize(id));
  };

  const handleSelectors = e => {
    if (name === 'colorsSelect') handleSelectColor(e.target.id);
    if (name === 'sizesSelect') handleSelectSize(e.target.id);
  };

  return (
    <List>
      {items.map(val => (
        <Li key={val} id={val} onClick={handleSelectors}>
          {val}
        </Li>
      ))}
    </List>
  );
};
export default SelectList;
//
