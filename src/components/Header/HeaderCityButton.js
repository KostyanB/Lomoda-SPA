import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { promptCity, selectUserCity } from '../store/userCitySlice';

const CityButton = styled.button`
background-color: transparent;
color: inherit;
/* padding: 0 12px; */
border: none;
height: 100%;
-webkit-transition: background-color 0.3s;
-o-transition: background-color 0.3s;
transition: background-color 0.3s;
:hover {
    color: #2796FF;
}
@media (max-width: 480px) {
    margin: 0 auto;
}
`;

export const HeaderCityButton = () => {

    const dispatch = useDispatch(),
        userCity = useSelector(selectUserCity);

    const getCity = () => dispatch(promptCity());

    return (
        <CityButton onClick={getCity}>{userCity}</CityButton>
    );
}