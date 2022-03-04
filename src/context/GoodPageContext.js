import React from 'react';
// hooks
import { useOpenSelector } from '../hooks/useOpenSelector';
import { useOpenButton } from '../hooks/useOpenButton';
import { useDisableBuyButton } from '../hooks/useDisableBuyButton';

export const GoodPageContext = React.createContext();

export const GoodPageContextProvider = props => {
  const openSelector = useOpenSelector(),
    openButton = useOpenButton(),
    buyButton = useDisableBuyButton();

  return (
    <GoodPageContext.Provider
      value={{
        openSelector,
        openButton,
        buyButton,
      }}
    >
      {props.children}
    </GoodPageContext.Provider>
  );
};
