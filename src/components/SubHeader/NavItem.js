import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import env from '../../env.json';

const Item = styled.li`
    cursor: pointer;
    .active, :hover, :active {
        color: ${env.hoverColor};
    }
`;

const NavItem = ({ src, text }) => (
    <Item>
        <NavLink to={`/goods/${src}`} activeClassName="active">
            {text}
        </NavLink>
    </Item>
)
export default NavItem;