import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icons from '../Styled/Icons';
import env from '../../env.json';

const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1 / 3;
    }

    @media (max-width: 576px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 1;
            grid-column: 1 / 2;
    }
    :hover>a>svg, :active>a>svg {
        fill: ${env.hoverColor};
    }
`;
const LogoLink = styled(Link)`
    display: flex;
`;

const NavLogo = () => (
    <Logo>
        <LogoLink to="/" className="nav-link">
            <Icons name="logo" height={80} width={180} fill="#000"/>
        </LogoLink>
    </Logo>
)
export default NavLogo;