import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';

const CityButton = styled.button`
background-color: transparent;
color: inherit;
padding: 0 12px;
border: none;
height: 100%;
-webkit-transition: background-color 0.3s;
-o-transition: background-color 0.3s;
transition: background-color 0.3s;
:hover {
    background-color: #0060d2;
}
@media (max-width: 480px) {
    margin: 0 auto;
}
`;

export const HeaderCityButton = () => {
    const { cityOfUserSet: { userCity, promptCity} } = useContext(Context);

    return (
        <CityButton onClick={() => promptCity()}>{userCity}</CityButton>
    );
}