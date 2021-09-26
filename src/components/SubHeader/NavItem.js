import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import env from '../../env.json';

const Item = styled.li`
    cursor: pointer;
    .current {
        color: ${env.hoverColor};
    }
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

const NavItem = ({ src, text }) => (
    <Item>
        <NavLink to={`/goods/${src}`}>
            {text}
        </NavLink>
    </Item>
)
export default NavItem;