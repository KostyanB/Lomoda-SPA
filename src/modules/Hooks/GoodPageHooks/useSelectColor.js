import { useState } from 'react';

export const useSelectColor = () => {
    const [ selectColor, setSelectColor ] = useState('Выберите цвет');

    // const toggleColorSelect = () => (openColorSelector) ? setOpenColorSelector(false) : setOpenColorSelector(true);

    return { selectColor, setSelectColor };
}