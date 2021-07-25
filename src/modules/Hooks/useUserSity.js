import { useState, useEffect } from 'react';

export const useUserCity = () => {
    const [ userCity, setUserCity ] = useState();

    useEffect(() => (localStorage.getItem('lomoda-location')) ?
        setUserCity(localStorage.getItem('lomoda-location')) :
        'Ваш город?', [])

    const promptCity = () => {
        const newCity = prompt('Укажите Ваш город');
        if (newCity) {
            localStorage.setItem('lomoda-location', newCity);
            setUserCity(newCity);
        }
    };
    return { userCity, promptCity };
}