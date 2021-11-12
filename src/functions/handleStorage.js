// user location storage
export const setLocationStorage = value => localStorage.setItem('lomoda-location', value);
export const getLocationStorage = () => localStorage.getItem('lomoda-location');

// cart storage
export const setCartStorage = data => localStorage.setItem('lomoda-cart', JSON.stringify(data));
export const getCartStorage = () => JSON?.parse(localStorage.getItem('lomoda-cart'));
export const clearCartStorage = () => localStorage.removeItem('lomoda-cart');