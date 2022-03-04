import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { GoodPageContext } from '../../context';
// component
import SelectButton from './SelectButton';
import SelectList from './SelectList';
import SelectWrapper from './SelectWrapper';
//store
import { selectSelectedColor } from '../../store/selectedParamSlice';

// styled
const ColorWrapper = styled(SelectWrapper)`
  margin-bottom: 15px;
  @media (max-width: 968px) {
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
  }
  @media (max-width: 520px) {
    grid-row: 3;
  }
`;

const ColorSelector = ({ param }) => {
  const {
    openSelector: { openColorSelector, toggleColorSelect, setOpenSizeSelector },
    openButton: { toggleBtnColor, openBtnColor, setOpenBtnSize },
  } = useContext(GoodPageContext);

  const selectedColor = useSelector(selectSelectedColor);

  const handleColorBtn = () => {
    toggleColorSelect();
    setOpenSizeSelector(false);
    toggleBtnColor();
    setOpenBtnSize(false);
  };

  return (
    <ColorWrapper>
      <SelectButton
        isOpen={openBtnColor}
        handle={handleColorBtn}
        title={selectedColor}
      />
      {openColorSelector && <SelectList items={param} name='colorsSelect' />}
    </ColorWrapper>
  );
};
export default ColorSelector;
