import { useState, useEffect } from 'react';

export const useHash = () => {
    const [ hash, setHash ] = useState('main');
    console.log('hash: ', hash);
    const [ showPage, setShowPage ] = useState('main');

    // useEffect(() => setHash('main'), []);

    const handleHash = value => {
        setHash(value);
        localStorage.setItem('lomoda-hash', value);
    };

    useEffect(() => (localStorage.getItem('lomoda-hash')) ?
        setHash(localStorage.getItem('lomoda-hash')) :
            handleHash('main'), []);

            const handleShowPage = pageType => {
                const newPageType = (pageType === 'main') ? 'main' :
                    (['men', 'women', 'kids'].some(item => item === pageType)) ? 'list' :
                        (pageType === 'card') ? 'card' :
                            (pageType === 'cart') ? 'cart' :
                                'error';
                // localStorage.setItem('lomoda-userpage', newPageType);
                setShowPage(newPageType);
            };



    return { hash, setHash, handleHash, handleShowPage };
}