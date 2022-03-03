import React, { useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SelectorContext } from "../Context";
// component
import SelectButton from "./SelectButton";
import SelectList from "./SelectList";
//store
import {
  selectSelectedColor,
  selectSelectedSize,
} from "../../store/selectedParamSlice";
// styled
const SelectWrapper = styled.div`
  position: relative;
  min-width: 200px;
  @media (max-width: 968px) {
    margin-bottom: 0;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    grid-column: 3/4;
  }
  @media (max-width: 520px) {
    grid-column: 1/3;
  }
`;
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

//*******************************************
const GoodSelector = ({ name, param }) => {
  const {
    openSelector: {
      openColorSelector,
      setOpenColorSelector,
      toggleColorSelect,
      openSizeSelector,
      setOpenSizeSelector,
      toggleSizeSelect,
    },
    openButton: {
      toggleBtnColor,
      toggleBtnSize,
      openBtnColor,
      setOpenBtnColor,
      openBtnSize,
      setOpenBtnSize,
    },
  } = useContext(SelectorContext);

  const selectedColor = useSelector(selectSelectedColor),
    selectedSize = useSelector(selectSelectedSize);

  const handleColorBtn = () => {
    toggleColorSelect();
    setOpenSizeSelector(false);
    toggleBtnColor();
    setOpenBtnSize(false);
  };

  const handleSizeBtn = () => {
    toggleSizeSelect();
    setOpenColorSelector(false);
    toggleBtnSize();
    setOpenBtnColor(false);
  };

  return (
    <>
      {name === "colorList" && (
        <ColorWrapper>
          <SelectButton
            isOpen={openBtnColor}
            handle={handleColorBtn}
            title={selectedColor}
          />
          {openColorSelector && (
            <SelectList items={param} name="colorsSelect" />
          )}
        </ColorWrapper>
      )}
      {name === "sizeList" && (
        <SizesWrapper>
          <SelectButton
            isOpen={openBtnSize}
            handle={handleSizeBtn}
            title={selectedSize}
          />
          {openSizeSelector && <SelectList items={param} name="sizesSelect" />}
        </SizesWrapper>
      )}
    </>
  );
};
export default GoodSelector;
