import React from "react";
import styled from "styled-components";
import env from "../../env.json";

const Btn = styled.button.attrs(props => ({
  disabled: props.disable,
}))`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: none;
  padding: 10px 15px;
  border-radius: 3px;
  color: #fff;
  background-color: ${props => (props.disable ? "#ccc" : env.hoverColor)};
  -webkit-box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
  box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 32px;
  cursor: ${props => (props.disable ? "not-allowed" : "pointer")};

  &:hover {
    color: ${props => (props.disable ? "#fff" : env.hoverColor)};
    background-color: ${props => (props.disable ? "#ccc" : "#fff")};
  }

  &:active {
    -webkit-box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
    box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
  }
`;

const Button = ({ disable, text, handle, form }) => (
  <Btn disable={disable} onClick={handle} form={form}>
    {text}
  </Btn>
);
export default Button;
