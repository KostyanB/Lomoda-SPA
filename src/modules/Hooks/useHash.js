import { useState } from 'react';

export const useHash = () => {
    const [ hash, setHash ] = useState('main');

    return { hash, setHash };
}