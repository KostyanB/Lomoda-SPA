import React from 'react';
import styled from 'styled-components';
import { ColumnIcons, ColumnTitle } from './FooterElems';
import Icons from '../Styled/Icons';
import gpImg from '../../image/icon-googleplay.svg';

const ColumnIconsApp = styled(ColumnIcons)`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
`;

export const AppIcons = () => (
    <>
    <ColumnTitle>Для мобильных устройств</ColumnTitle>
    <ColumnIconsApp>
        <Icons name="appstore" width={85} height={25}/>
        <img src={gpImg} alt="googleplay"/>
        {/* <Icons name="googleplay" width={85} height={25}/> */}
        <Icons name="huaweistore" width={85} height={25}/>
    </ColumnIconsApp>
    </>
)