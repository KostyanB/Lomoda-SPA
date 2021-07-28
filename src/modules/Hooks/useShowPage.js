import { useState } from 'react';
// import { useHash } from './useHash';

export const useShowPage = () => {
    const [ showPage, setShowPage ] = useState('promo');
    // const { hash, setHash} = useHash();

    // const checkShowPage = (hash) => {
    //     const newPageType = (hash === 'main') ? 'promo' :
    //         (['men', 'women', 'kids'].some(item => item === hash)) ? 'list' :
    //             (hash === 'cart') ? 'cart' :
    //                 'card';

    //     // localStorage.setItem('lomoda-userpage', newPageType);
    //     setShowPage(newPageType);
    // };

    // useEffect(() => (localStorage.getItem('lomoda-userpage')) ?
    //     setShowPage(localStorage.getItem('lomoda-userpage')) :
    //     'promo', [])

    const checkShowPage = pageType => {
        const newPageType = (pageType === 'main') ? 'promo' :
            (['men', 'women', 'kids'].some(item => item === pageType)) ? 'list' :
                (pageType === 'card') ? 'card' :
                    (pageType === 'cart') ? 'cart' :
                        'error';
        // localStorage.setItem('lomoda-userpage', newPageType);
        setShowPage(newPageType);
    };



    return { showPage, setShowPage, checkShowPage };
}