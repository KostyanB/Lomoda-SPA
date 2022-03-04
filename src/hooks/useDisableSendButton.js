import { useState } from 'react';
import checkParamForDisableBtn from '../functions/checkParamForDisableBtn';

export const useDisableSendButton = () => {
  const [disableSendButton, setDisableSendButton] = useState(true);

  const [cartCheck, setCartCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const checkDisableSend = () =>
    setDisableSendButton(checkParamForDisableBtn(cartCheck, phoneCheck));

  return {
    cartCheck,
    phoneCheck,
    disableSendButton,
    setCartCheck,
    setPhoneCheck,
    checkDisableSend,
  };
};
