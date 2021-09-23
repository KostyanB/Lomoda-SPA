import { useState, useEffect } from 'react';

export const useHash = () => {
    const [ hash, setHash ] = useState();
    const [ showPage, setShowPage ] = useState('main');

    const handleShowPage = value => {
        const pageType = (value === 'main') ? 'main' :
            (['men', 'women', 'kids'].some(item => item === value)) ? 'list' :
                'card';
        return pageType;
    };

    const handleHash = value => {
        setHash(value);
        localStorage.setItem('lomoda-hash', value);
        setShowPage(handleShowPage(value));
    };

    useEffect(() => {
        const localHash = localStorage.getItem('lomoda-hash');
        if (localHash) {
            setHash(localHash);
            setShowPage(handleShowPage(localHash));
        } else {
            handleHash('main');
        }
    }, []);

    return { hash, setHash, handleHash, handleShowPage, showPage, setShowPage };
}