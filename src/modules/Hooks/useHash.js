import { useState } from 'react';

export const useHash = () => {
    const [ hash, setHash ] = useState('main');
    // console.log('hash: ', hash);

    // useEffect(() => setHash('main'), []);

    // const handleHash = value => {
    //     setHash(value);
    //     localStorage.setItem('lomoda-hash', value);
    // };

    // useEffect(() => (localStorage.getItem('lomoda-hash')) ?
    //     setHash(localStorage.getItem('lomoda-hash')) :
    //         handleHash('main'), []);



    return { hash, setHash };
}