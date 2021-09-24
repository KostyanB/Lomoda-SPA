import './subHeader.scss';
import React from 'react';
import styled from 'styled-components';
// elements
import { Container } from '../Styled/Container';
// images
import logoImg from '../../image/logo.svg';
import cartImg from '../../image/cart.svg';
//store
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectNameList } from '../store/goodsListSlice';
import { setShowCart } from '../store/showCartSlice';
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
const NavItem = styled.li`
    cursor: pointer;

    :hover, :active {
        color: #2796FF;
    }
`;
const NavLogo = styled(NavItem)`
    display: block;
    max-width: 180px;
    -ms-grid-column-align: center;
        justify-self: center;

    @media (max-width: 768px) {
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1 / 3;
    }

    @media (max-width: 480px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 1;
            grid-column: 1 / 2;
    }
`;
const CartButton = styled.button`
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

    @media (max-width: 768px) {
        -ms-grid-column: 2;
        -ms-grid-column-span: 1;
        grid-column: 2 / 3;
    }

    @media (max-width: 480px) {
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
    }
`;

//--------------------------------------------------------------------
const SubHeader = () => {

    const dispatch = useDispatch();
    const nameList = useSelector(selectNameList);

    const openCart = () => dispatch(setShowCart(true));

    return (
        <SubHeaderStyle>
            <Wrapper>
                <Nav>
                    <NavItem key="allgoods">
                        <Link to="/goods/all" className="nav-link">Все товары</Link>
                    </NavItem>
                    {Object.entries(nameList).map(item => {
                        return (
                            <NavItem key={item[0] + item[1]}>
                                <Link to={`/goods/${item[0]}`} className="nav-link">
                                    {item[1]}
                                </Link>
                            </NavItem>
                        );
                    })}
                </Nav>
                <NavLogo>
                    <Link to="/" className="nav-link">
                        <img src={logoImg} alt="Компания Lomoda"/>
                    </Link>
                </NavLogo>
                <CartButton onClick={openCart}>Корзина</CartButton>
            </Wrapper>
        </SubHeaderStyle>
    );
};
export  default SubHeader;
