import { useState } from 'react';

export const useSelectedParam = () => {
    const [ selectColor, setSelectColor ] = useState('Выберите цвет');
    const [ selectSize, setSelectSize ] = useState('Выберите размер');

    return { selectColor, setSelectColor, selectSize, setSelectSize };
}