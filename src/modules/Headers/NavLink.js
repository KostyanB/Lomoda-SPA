import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import styled from 'styled-components';

const Link = styled.a`
    display: flex;
    align-items: center;
`;

export const NavLink = props => {
    const { hash, name, text } = props.param;

    const {
        hashSet: { setHash, handleHash },
        pageNameSet: { setPageName },
        pageShow: { checkShowPage },
        pageTitle: { setPageTitle },
    } = useContext(Context);

    const handleGoodsList = (valHash, namePage) => {
        setHash(valHash);
        // handleHash(valHash);
        setPageName(namePage)
        checkShowPage(valHash);
        setPageTitle(namePage);
    };

    return (
        <Link href={`#${hash}`} onClick={() => handleGoodsList(hash, name)}>{text}</Link>
    );
};