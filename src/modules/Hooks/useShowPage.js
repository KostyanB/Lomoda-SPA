import { useState } from 'react';

export const useShowPage = () => {
    const [ showPage, setShowPage ] = useState('promo');

    const checkShowPage = hashVal => {
        (hashVal === 'main') ? setShowPage('promo') :
            (['men', 'women', 'kids'].some(item => item === hashVal)) ? setShowPage('list') :
                setShowPage('card');
    };
    return { showPage, setShowPage, checkShowPage };
}