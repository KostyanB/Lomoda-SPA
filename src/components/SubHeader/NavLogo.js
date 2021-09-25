import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icons from '../Styled/Icons';
import env from '../../env.json';

const Logo = styled.li`
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
    :hover>a>svg, :active>a>svg {
        fill: ${env.hoverColor};
    }
`;

export const NavLogo = () => (
    <Logo>
        <Link to="/" className="nav-link">
            <Icons name="logo" height={90} fill="#000"/>
        </Link>
    </Logo>
)