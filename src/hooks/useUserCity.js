import { useState, useEffect } from 'react';
import {
  setLocationStorage,
  getLocationStorage,
} from '../functions/handleStorage';

const initUserCity = 'Ваш город?';

export const useUserCity = () => {
  const [userCity, setUserCity] = useState('');

  const promptCity = () => {
    const newCity = prompt('Укажите Ваш город');
    if (newCity) {
      setLocationStorage(newCity);
      setUserCity(newCity);
    }
  };

  useEffect(() => {
    const city = getLocationStorage();
    setUserCity(city ? city : initUserCity);
  }, []);

  return {
    userCity,
    promptCity,
  };
};
