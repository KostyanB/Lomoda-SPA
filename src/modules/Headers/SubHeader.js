import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { Container } from '../Styled/Container';
import { HeadersWrapper } from './HeadersWrapper';
import logoImg from '../../image/logo.svg';
import cartImg from '../../image/cart.svg';
import { NavLink } from './NavLink';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SubHeaderStyle = styled.section`
    min-height: 90px;
    @media (max-width: 768px) {
        padding-top: 30px;
    }
`;
const SubheaderWrapper = styled(HeadersWrapper)`
    position: relative;
    display: -ms-grid;
    display: grid;
    /* -ms-grid-columns: (1fr)[3]; */
    grid-template-columns: repeat(3, 1fr);
    min-height: 90px;
    padding: 0 10px;
    @media (max-width: 768px) {
        /* -ms-grid-columns: (1fr)[2]; */
        grid-template-columns: repeat(2, 1fr);
    }
`;
const SubheaderNav = styled.nav`
    /* display: block; */
    @media (max-width: 768px) {
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1 / 3;
    }
`;
const NavList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 15px;
    @media (max-width: 768px) {
        -webkit-box-pack: center;
            -ms-flex-pack: center;
        justify-content: center;
    }
`;
const NavItem = styled.li`
    cursor: pointer;
`;
const NavLogo = styled(NavItem)`
    display: block;
    max-width: 180px;
    -ms-grid-column-align: center;
        justify-self: center;
`;
const SubheaderCart = styled.button`
    display: block;
    -ms-grid-column-align: end;
        justify-self: end;
    background-color: transparent;
    background-image: url(${cartImg});
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 28px;
    border: none;
`;
const Cart = styled(NavItem)`
    display: block;
    -ms-grid-column-align: end;
        justify-self: end;
        /* align-items: center; */
`;
// nav elems
const WomenNav = () => (
    <NavItem>
        <NavLink  param={
            {
                hash: 'women',
                name: 'Женщинам',
                text: 'Женщинам',
            }
        }/>
    </NavItem>
)
const MenNav = () => (
    <NavItem>
        <NavLink  param={
            {
                hash: 'men',
                name: 'Мужчинам',
                text:  'Мужчинам',
            }
        }/>
    </NavItem>
)
const KidsNav = () => (
    <NavItem>
        <NavLink  param={
            {
                hash: 'kids',
                name: 'Детям',
                text:  'Детям',
            }
        }/>
    </NavItem>
)
const MainNav = () => (
    <NavLogo>
        <NavLink param={
            {
                hash: 'main',
                name: 'Lomoda',
                text: <img src={logoImg} alt="Компания Lomoda"/>,
            }
        }/>
    </NavLogo>
)
//--------------------------------------------------------------------
export const SubHeader = () => {
    const {
        showCart: { setShowCart },
    } = useContext(Context);

    return (
        <SubHeaderStyle>
            <Container>
                <SubheaderWrapper>
                    {/* <Router> */}
                    <SubheaderNav>
                        <NavList>
                            {/* <NavItem><NavLink  param={
                                {
                                    hash: 'women',
                                    name: 'Женщинам',
                                    text: 'Женщинам'
                                }
                            }/></NavItem>

                            <NavItem><NavLink  param={
                                {
                                    hash: 'men',
                                    name: 'Мужчинам',
                                    text:  'Мужчинам'
                                }
                            }/></NavItem>

                            <NavItem><NavLink  param={
                                {
                                    hash: 'kids',
                                    name: 'Детям',
                                    text:  'Детям'
                                }
                            }/></NavItem> */}
                            <WomenNav/>
                            <MenNav/>
                            <KidsNav/>
                        </NavList>
                    </SubheaderNav>
                    {/* <NavLogo>
                        <NavLink param={
                            {
                                hash: 'main',
                                name: 'Lomoda',
                                text: <img src={logoImg} alt="Компания Lomoda"/>
                            }
                        }/>
                    </NavLogo> */}
                    <MainNav/>
                    {/* <Switch>
                        <Route path="/main"/>
                        <Route exact path="/men"/>
                        <Route path="/women"/>
                        <Route path="/kids"/>
                    </Switch>
                    </Router> */}
                    <SubheaderCart onClick={() => {setShowCart(true)}}>Корзина</SubheaderCart>
                    {/* <Cart>
                        <NavLink  param={
                                {
                                    hash: 'cart',
                                    name: 'Корзина',
                                    text:  <><img src={cartImg} alt="Cart"/>Корзина</>
                                }
                            }/>
                    </Cart> */}


                </SubheaderWrapper>
            </Container>
        </SubHeaderStyle>
    );
}

