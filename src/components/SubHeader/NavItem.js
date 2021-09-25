import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../env.json';

const Item = styled.li`
    cursor: pointer;
`;

const NavLink = styled(Link)`
    display: -webkit-box;
        display: -ms-flexbox;
            display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;

    :hover, :active {
        color: ${env.hoverColor};
    }
`;

export const NavItem = ({ src, text }) => (
    <Item>
        <NavLink to={`/goods/${src}`}>
            {text}
        </NavLink>
    </Item>
)