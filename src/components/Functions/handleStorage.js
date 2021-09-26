// user location storage
export const setLocationStorage = value => localStorage.setItem('lomoda-location', value);
export const getLocationStorage = () => localStorage.getItem('lomoda-location');

// cart storage
export const setCartStorage = value => localStorage.setItem('lomoda-cart', value);
export const getCartStorage = () => localStorage.getItem('lomoda-cart');