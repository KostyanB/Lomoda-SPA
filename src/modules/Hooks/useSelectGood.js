import { useState } from 'react';

export const useSelectGood = () => {
    const [ selectGood, setSelectGood ] = useState('');

    return { selectGood, setSelectGood };
}