import { useState } from 'react';

export const useOpenSelector = () => {
    const [ openColorSelector, setOpenColorSelector ] = useState(false);
    const [ openSizeSelector, setOpenSizeSelector ] = useState(false);

    const toggleColorSelect = () => (openColorSelector) ? setOpenColorSelector(false) : setOpenColorSelector(true);
    const toggleSizeSelect = () => (openSizeSelector) ? setOpenSizeSelector(false) : setOpenSizeSelector(true);

    return {
        openColorSelector,
        setOpenColorSelector,
        toggleColorSelect,
        openSizeSelector,
        setOpenSizeSelector,
        toggleSizeSelect
    };
}