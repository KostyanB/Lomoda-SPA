import { useState } from 'react';

export const useBtnStyle = () => {

    const [btnColorStyle, setBtnColorStyle] = useState('');
    const [btnSizeStyle, setBtnSizeStyle] = useState('');

    const toggleBtnColor = () => (btnColorStyle === '') ?
        setBtnColorStyle('open') :
            setBtnColorStyle('');

    const toggleBtnSize = () => (btnSizeStyle === '') ?
        setBtnSizeStyle('open') :
            setBtnSizeStyle('');

    return {
        btnColorStyle,
        setBtnColorStyle,
        toggleBtnColor,
        btnSizeStyle,
        setBtnSizeStyle,
        toggleBtnSize
    };
}
