import React from 'react';
import styled from 'styled-components';
import { ColumnIcons, ColumnTitle } from './FooterElems';
// import Icons from '../Styled/Icons';
import fB from '../../image/facebook.svg';
import fbHov from '../../image/facebook_hover.svg';
import vK from '../../image/vk.svg';
import vkHov from '../../image/vk_hover.svg';
import yT from '../../image/youtube.svg';
import ytHov from '../../image/youtube_hover.svg';
import iG from '../../image/instagram.svg';
import igHov from '../../image/instagram_hover.svg';

const Icon = styled.li`
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;
const Fb = styled(Icon)`
    background-image: url(${fB});
    :hover {
        background-image: url(${fbHov});
    }
`;
const Vk = styled(Icon)`
    background-image: url(${vK});
    :hover {
        background-image: url(${vkHov});
    }
`;
const Yt = styled(Icon)`
    background-image: url(${yT});
    :hover {
        background-image: url(${ytHov});
    }
`;
const Ig = styled(Icon)`
    background-image: url(${iG});
    :hover {
        background-image: url(${igHov});
    }
`;

export const SocIcons = () => (

    <>
    <ColumnTitle>О нас</ColumnTitle>
    <ColumnIcons>
        <Fb/>
        <Vk/>
        <Yt/>
        <Ig/>
    </ColumnIcons>
    </>
)