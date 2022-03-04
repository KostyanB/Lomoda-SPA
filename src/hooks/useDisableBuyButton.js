import { useState } from 'react';
import checkParamForDisableBtn from '../functions/checkParamForDisableBtn';

export const useDisableBuyButton = () => {
  const [disableBuyButton, setDisableBuyButton] = useState(true);

  const [colorCheck, setColorCheck] = useState(false);
  const [sizeCheck, setSizeCheck] = useState(false);

  const checkDisableBuy = () =>
    setDisableBuyButton(checkParamForDisableBtn(colorCheck, sizeCheck));

  return {
    colorCheck,
    sizeCheck,
    disableBuyButton,
    setColorCheck,
    setSizeCheck,
    checkDisableBuy,
  };
};
