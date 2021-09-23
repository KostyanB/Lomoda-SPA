import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Link1 = styled(Link)`
    display: flex;
    align-items: center;
`;

export const NavLink = ({ hash, name, text, handler, page }) => (
        <Link to={`/${page}/${hash}`} onClick={() => handler(hash, name, page)}>{text}</Link>
);

// const Link = styled.a`
//     display: flex;
//     align-items: center;
// `;

// export const NavLink = ({ hash, name, text, handler, page }) => (
//         <Link href={`#${hash}`} onClick={() => handler(hash, name, page)}>{text}</Link>
// );