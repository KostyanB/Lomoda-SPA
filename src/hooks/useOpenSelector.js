import { useState } from "react";

export const useOpenSelector = () => {
  const [openColorSelector, setOpenColorSelector] = useState(false);
  const [openSizeSelector, setOpenSizeSelector] = useState(false);

  const toggleColorSelect = () => setOpenColorSelector(!openColorSelector);
  const toggleSizeSelect = () => setOpenSizeSelector(!openSizeSelector);

  return {
    openColorSelector,
    setOpenColorSelector,
    toggleColorSelect,
    openSizeSelector,
    setOpenSizeSelector,
    toggleSizeSelect,
  };
};
