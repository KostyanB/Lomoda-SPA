import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import env from "../../env.json";
// elements
import { Container } from "../Styled/Container";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import CartButton from "./CartButton";
//store
import { selectCategory } from "../../store/categorySlice";
// styled
const SubHeaderStyle = styled.section`
  height: fit-content;
  width: 100vw;
  padding-right: 17px;
  padding-bottom: 15px;
`;
const Wrapper = styled(Container)`
  position: relative;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  grid-template-columns: max-content 1fr 1fr;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: max-content 1fr;
  }
`;
const Nav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1 / 2;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media (max-width: 576px) {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1 / 3;
  }
`;

//--------------------------------------------------------------------
const SubHeader = () => {
  const category = useSelector(selectCategory); // категории
  const names = env.categoryNames;

  return (
    <SubHeaderStyle>
      <Wrapper>
        <Nav>
          <NavItem key="allgoods" src="all" text="Все товары" />
          {category.map(item => (
            <NavItem key={item} src={item} text={names[item]} />
          ))}
        </Nav>
        <NavLogo />
        <CartButton />
      </Wrapper>
    </SubHeaderStyle>
  );
};
export default SubHeader;
