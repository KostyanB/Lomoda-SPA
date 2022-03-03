import React from "react";
import styled from "styled-components";
import env from "../../env.json";
import { Container } from "../Styled/Container";
import HeaderCityButton from "./HeaderCityButton";
import { Birthday } from "./Birthday";

const HeaderStyle = styled.header`
  background-color: #000;
  color: #fff;
  width: 100vw;
  padding-right: 17px;
`;
const Wrapper = styled(Container)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
`;
const RightBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 15px;
  height: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.p`
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  height: 100%;
  cursor: pointer;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  :hover {
    color: ${env.hoverColor};
  }
`;

const Header = () => (
  <HeaderStyle>
    <Wrapper>
      <HeaderCityButton />
      <RightBlock>
        <Title>Бесконтактная доставка</Title>
        <Title>Платите как удобно</Title>
        <Birthday />
      </RightBlock>
    </Wrapper>
  </HeaderStyle>
);
export default Header;
