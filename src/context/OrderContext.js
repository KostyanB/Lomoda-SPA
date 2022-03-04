import React, { createContext } from 'react';
import { useDisableSendButton } from '../hooks/useDisableSendButton';

export const OrderContext = createContext();

export const OrderContextProvider = props => {
  const sendButton = useDisableSendButton();

  return (
    <OrderContext.Provider value={{ sendButton }}>
      {props.children}
    </OrderContext.Provider>
  );
};
