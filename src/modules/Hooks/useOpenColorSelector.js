import { useState } from 'react';

export const useOpenColorSelector = () => {
    const [ openColorSelector, setOpenColorSelector ] = useState(false);

    const toggleColorSelect = () => (openColorSelector) ? setOpenColorSelector(false) : setOpenColorSelector(true);

    return { openColorSelector, setOpenColorSelector, toggleColorSelect };
}