import React, { useContext } from 'react';
// import { Context } from '../Functions/context';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Link = styled.a`
    display: flex;
    align-items: center;
`;

export const NavLink = ({ hash, name, text, handler }) => {

    return (
        <Link href={`#${hash}`} onClick={() => handler(hash, name)}>{text}</Link>
        // <Links to={`/${hash}`} onClick={() => handleGoodsList(hash, name)}>{text}</Links>
    );
};