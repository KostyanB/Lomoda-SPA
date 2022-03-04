import React from 'react';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';

const GoodSelector = ({ name, param }) => {
  if (name === 'colorList') {
    return <ColorSelector param={param} />;
  } else {
    return <SizeSelector param={param} />;
  }
};
export default GoodSelector;
