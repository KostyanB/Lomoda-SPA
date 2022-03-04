import React, { createContext } from 'react';
import { useScrollLock } from '../hooks/useScrollLock';
import { useOpenModal } from '../hooks/useOpenModal';

export const Context = createContext();

export const ContextProvider = props => {
  const scrollLock = useScrollLock();
  const modalOpen = useOpenModal();

  return (
    <Context.Provider
      value={{
        scrollLock,
        modalOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
