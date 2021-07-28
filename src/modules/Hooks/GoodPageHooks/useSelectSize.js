import { useState } from 'react';

export const useSelectSize = () => {
    const [ selectSize, setSelectSize ] = useState('Выберите размер');

    // const toggleSizeSelect = () => (openSizeSelector) ? setOpenSizeSelector(false) : setOpenSizeSelector(true);

    return { selectSize, setSelectSize };
}