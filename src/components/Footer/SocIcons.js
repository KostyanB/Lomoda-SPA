import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { ColumnIcons } from './FooterElems';
import { FacebookIcon, YoutubeIcon, VkontakteIcon, InstagramIcon } from '../Styled/SocIcons/SocIcons';

const Icon = styled.li`
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;

    color: #888;
    :hover {
        color: ${env.hoverColor};
    }
    /* .soc-icon-path-stroke {
    stroke: #888;
    :hover {
        stroke: #2796FF;
    }
}
.soc-icon-path-fill {
    fill: #888;
    :hover {
        fill: #2796FF;
    }
} */

    /* svg {

        .soc-icon-path-stroke {
        stroke: #888;
        :hover {
            stroke: ${env.hoverColor};
        }
    }
} */

`;

const SocIcons = () => (
    <ColumnIcons>
        <Icon><FacebookIcon/></Icon>
        <Icon><VkontakteIcon/></Icon>
        <Icon><YoutubeIcon/></Icon>
        <Icon><InstagramIcon/></Icon>
    </ColumnIcons>
)
export default SocIcons;