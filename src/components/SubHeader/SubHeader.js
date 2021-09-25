import React from 'react';
import styled from 'styled-components';
// elements
import { Container } from '../Styled/Container';
import { NavItem } from './NavItem';
import { NavLogo } from './NavLogo';
import { CartButton } from './CartButton';
//store
import { useSelector } from 'react-redux';
import { selectNameList } from '../store/goodsListSlice';
// styled
const SubHeaderStyle = styled.section`
    min-height: 90px;
    width: 100vw;
    padding-right: 17px;
    @media (max-width: 768px) {
        min-height: 60px;
    }
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

    @media (max-width: 480px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1 / 3;
    }
`;

//--------------------------------------------------------------------
const SubHeader = () => {

    const nameList = useSelector(selectNameList);

    return (
        <SubHeaderStyle>
            <Wrapper>
                <Nav>
                    <NavItem key="allgoods" src="all" text="Все товары"/>
                    {Object.entries(nameList).map(item => (
                        <NavItem key={item[0] + item[1]} src={item[0]} text={item[1]}/>
                    ))}
                </Nav>
                <NavLogo/>
                <CartButton/>
            </Wrapper>
        </SubHeaderStyle>
    );
};
export  default SubHeader;
