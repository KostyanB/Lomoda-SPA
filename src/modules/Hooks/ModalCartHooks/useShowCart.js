import { useState } from 'react';

export const useShowCart = () => {
    const [ showCart, setShowCart ] = useState(false);

    return { showCart, setShowCart };
}