import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { Container } from '../Styled/Container';
import { HeadersWrapper } from './HeadersWrapper';
import logoImg from '../../image/logo.svg';
import cartImg from '../../image/cart.svg';
import { NavLink } from './NavLink';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectNameList } from '../store/goodsListSlice';
import { setPageTitle } from '../store/pageTitleSlice';
import { setSelectedGood } from '../store/goodPageSlice';
import { setPageName } from '../store/pageNameSlice';
import { setShowCart } from '../store/showCartSlice';

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
    :hover {
        color: #2796FF;
    }
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
    :hover {
        color: #2796FF;
    }
`;

//--------------------------------------------------------------------
export const SubHeader = () => {
    const {
        hashSet: { handleHash },
    } = useContext(Context);

    const dispatch = useDispatch();
    const nameList = useSelector(selectNameList);

    const handleGoodsList = (valHash, namePage) => {
        handleHash(valHash);
        dispatch(setPageName(namePage));
        dispatch(setPageTitle(`Lomoda ${namePage}`));
        dispatch(setSelectedGood({}));
    };

    const openCart = () => dispatch(setShowCart(true));

    return (
        <SubHeaderStyle>
            <Container>
                <SubheaderWrapper>
                    {/* <Router> */}
                    <SubheaderNav>
                        <NavList>
                            {Object.entries(nameList).map(item => {
                                return (
                                    <NavItem key={item[0] + item[1]}>
                                        <NavLink handler={handleGoodsList}
                                            hash={item[0]}
                                            name={item[1]}
                                            text={item[1]}
                                        />
                                    </NavItem>
                                );
                            })}
                        </NavList>
                    </SubheaderNav>
                    <NavLogo>
                        <NavLink handler={handleGoodsList}
                            hash="main"
                            text={<img src={logoImg} alt="Компания Lomoda"/>}
                        />
                    </NavLogo>
                    {/* <Switch>
                        <Route path="/main"/>
                        <Route exact path="/men"/>
                        <Route path="/women"/>
                        <Route path="/kids"/>
                    </Switch>
                    </Router> */}
                    <SubheaderCart onClick={openCart}>Корзина</SubheaderCart>
                </SubheaderWrapper>
            </Container>
        </SubHeaderStyle>
    );
}

