import { useState } from 'react';

export const useBtnSizeStyle = () => {

    const [btnSizeStyle, setBtnSizeStyle] = useState();

    return { btnSizeStyle, setBtnSizeStyle };
}