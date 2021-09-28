
import React from 'react';

const SelectButton = props => {
    const { className, title, handle } = props;
    const classes = `select-btn ${className}`;

    return (
        <button className={classes} onClick={handle}>{title}</button>
    );
}
export default SelectButton;