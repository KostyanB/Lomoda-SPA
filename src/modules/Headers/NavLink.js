import React, { useContext } from 'react';
import { Context } from '../Functions/context';
import { showTitle } from '../Functions/showTitle';
import styled from 'styled-components';

const Link = styled.a`
    display: flex;
    align-items: center;
`;

export const NavLink = props => {
    const { hash, name, text } = props.param;

    const {
        hashSet: { setHash },
        pageNameSet: { setPageName },
        pageShow: { checkShowPage }
    } = useContext(Context);

    const handleGoodsList = (valHash, namePage) => {
        setHash(valHash);
        setPageName(namePage)
        showTitle(namePage);
        checkShowPage(valHash);
    };

    return (
        <Link href={`#${hash}`} onClick={() => handleGoodsList(hash, name)}>{text}</Link>
    );
};