import React from "react";
// hooks
import { useOpenSelector } from "../../hooks/useOpenSelector";
import { useOpenButton } from "../../hooks/useOpenButton";

export const SelectorContext = React.createContext();

export const SelectorContextProvider = props => {
  const openSelector = useOpenSelector(),
    openButton = useOpenButton();

  return (
    <SelectorContext.Provider
      value={{
        openSelector,
        openButton,
      }}
    >
      {props.children}
    </SelectorContext.Provider>
  );
};
