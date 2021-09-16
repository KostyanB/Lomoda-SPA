import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: flex;
    align-items: center;
`;

export const NavLink = ({ hash, name, text, handler }) => (
        <Link href={`#${hash}`} onClick={() => handler(hash, name)}>{text}</Link>
);