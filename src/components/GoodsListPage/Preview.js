import React from "react";

export const Preview = props => (
  <img
    className="good__img"
    src={`../../db/goods-image/${props.src}`}
    alt={props.alt}
  />
);
