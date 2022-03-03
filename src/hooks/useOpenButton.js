import { useState } from "react";

export const useOpenButton = () => {
  const [openBtnColor, setOpenBtnColor] = useState(false);
  const [openBtnSize, setOpenBtnSize] = useState(false);

  const toggleBtnColor = () => setOpenBtnColor(!openBtnColor);

  const toggleBtnSize = () => setOpenBtnSize(!openBtnSize);

  return {
    openBtnColor,
    setOpenBtnColor,
    toggleBtnColor,
    openBtnSize,
    setOpenBtnSize,
    toggleBtnSize,
  };
};
