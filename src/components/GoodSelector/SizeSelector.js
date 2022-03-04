import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { GoodPageContext } from '../../context';
// component
import SelectButton from './SelectButton';
import SelectList from './SelectList';
import SelectWrapper from './SelectWrapper';
//store
import { selectSelectedSize } from '../../store/selectedParamSlice';

// styled
const SizesWrapper = styled(SelectWrapper)`
  margin-bottom: 30px;
  @media (max-width: 968px) {
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
  }
  @media (max-width: 520px) {
    grid-row: 4;
  }
`;

const SizeSelector = ({ param }) => {
  const {
    openSelector: { setOpenColorSelector, openSizeSelector, toggleSizeSelect },
    openButton: { toggleBtnSize, setOpenBtnColor, openBtnSize },
  } = useContext(GoodPageContext);

  const selectedSize = useSelector(selectSelectedSize);

  const handleSizeBtn = () => {
    toggleSizeSelect();
    setOpenColorSelector(false);
    toggleBtnSize();
    setOpenBtnColor(false);
  };

  return (
    <SizesWrapper>
      <SelectButton
        isOpen={openBtnSize}
        handle={handleSizeBtn}
        title={selectedSize}
      />
      {openSizeSelector && <SelectList items={param} name='sizesSelect' />}
    </SizesWrapper>
  );
};
export default SizeSelector;
