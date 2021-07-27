import { useState } from 'react';

export const useShowPage = () => {
    const [ showPage, setShowPage ] = useState('promo');

    const checkShowPage = pageType => {
        (pageType === 'main') ? setShowPage('promo') :
            (['men', 'women', 'kids'].some(item => item === pageType)) ? setShowPage('list') :
                (pageType === 'card') ? setShowPage('card') :
                    (pageType === 'cart') ? setShowPage('cart') :
                        setShowPage('error');
    };
    return { showPage, setShowPage, checkShowPage };
}