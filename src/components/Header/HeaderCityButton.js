import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { useUserCity } from '../../hooks/useUserCity';

const CityButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  height: 100%;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;

  &:hover {
    color: ${env.hoverColor};
  }

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;

const HeaderCityButton = () => {
  const { userCity, promptCity } = useUserCity();

  const getCity = () => promptCity();

  return <CityButton onClick={getCity}>{userCity}</CityButton>;
};
export default HeaderCityButton;
