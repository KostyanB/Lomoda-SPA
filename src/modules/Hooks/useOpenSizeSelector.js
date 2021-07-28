import { useState } from 'react';

export const useOpenSizeSelector = () => {
    const [ openSizeSelector, setOpenSizeSelector ] = useState(false);

    const toggleSizeSelect = () => (openSizeSelector) ? setOpenSizeSelector(false) : setOpenSizeSelector(true);

    return { openSizeSelector, setOpenSizeSelector, toggleSizeSelect };
}