import { useState } from 'react';

export const useBtnColorStyle = () => {

    const [btnColorStyle, setBtnColorStyle] = useState();

    return { btnColorStyle, setBtnColorStyle };
}
