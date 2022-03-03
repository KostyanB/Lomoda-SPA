import React from "react";
import styled from "styled-components";
import env from "../../env.json";
import Icons from "../Styled/Icons";

const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px 24px;
  background-color: #f93c00;
  max-height: 100%;

  *:not(:last-child) {
    margin-right: 5px;
  }

  :hover,
  :hover > svg,
  :active,
  :active > svg {
    fill: ${env.hoverColor};
    color: ${env.hoverColor};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Birthday = () => (
  <Wrap>
    <span>нам</span>
    <Icons name="birthday" height={38} width={38} fill="#FFF" />
    <span>лет!</span>
  </Wrap>
);
