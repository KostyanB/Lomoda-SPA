import React from "react";
import styled from "styled-components";

// added style if isOpen
const openBtnStyle = `
  border-bottom-color: #ccc;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  &:after {
      margin-top: 6px;
      border-color: #000 #000 transparent transparent;
  }
`;

const Button = styled.button`
  position: relative;
  padding: 8px 24px;
  text-align: left;
  background-color: transparent;
  width: 100%;
  height: 58px;
  border: 1px solid #888;
  border-radius: 3px;
  &:after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    height: 16px;
    width: 16px;
    margin-top: -4px;
    -webkit-transform: translateY(-50%) rotate(-45deg);
    -ms-transform: translateY(-50%) rotate(-45deg);
    transform: translateY(-50%) rotate(-45deg);
    border-style: solid;
    border-color: transparent transparent #000 #000;
    border-width: 1px;
    z-index: 1;
    -webkit-transition: border-color 0.2s ease-in-out,
      margin-top 0.2s ease-in-out;
    -o-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
  }
  &:hover {
    color: #0060d2;
    cursor: pointer;
  }

  ${props => props.isOpen};
`;

const SelectButton = ({ isOpen, title, handle }) => (
  <Button isOpen={isOpen && openBtnStyle} onClick={handle}>
    {title}
  </Button>
);
export default SelectButton;
