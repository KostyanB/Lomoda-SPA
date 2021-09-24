import styled from 'styled-components';
import React from 'react';

const LoadWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 40, 120, .7);;
  z-index: 1001;
`;
export const ErrorLoad = styled(LoadWrap)`
  padding-top: 200px;
  color: red;
  font-size: 30px;
  text-align: center;
`;
const Loader = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  left: 50%;
`;
const Dash = styled.div`
  margin: 0 35px;
  width: 60px;
  height: 40px;
  border-radius: 15px;
  background: #33d9de;
  text-align: center;
  color: #002878;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
`;
const Dash1 = styled(Dash)`
  margin-right: -18px;
  transform-origin: center left;
  animation: spin1 3s linear infinite;
  @keyframes spin1 {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(360deg);
    }
    30% {
      transform: rotate(370deg);
    }
    35% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Dash2 = styled(Dash)`
  transform-origin: center right;
  animation: spin2 3s linear infinite;
  animation-delay: .2s;
  @keyframes spin2 {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-180deg);
    }
    35% {
      transform: rotate(-190deg);
    }
    40% {
      transform: rotate(-180deg);
    }
    78% {
      transform: rotate(-180deg);
    }
    95% {
      transform: rotate(-360deg);
    }
    98% {
      transform: rotate(-370deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Dash3 = styled(Dash)`
  transform-origin: center right;
  animation: spin3 3s linear infinite;
  animation-delay: .3s;
  @keyframes spin3 {
    0% {
      transform: rotate(0deg);
    }
    27% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    45% {
      transform: rotate(190deg);
    }
    50% {
      transform: rotate(180deg);
    }
    62% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    80% {
      transform: rotate(370deg);
    }
    85% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Dash4 = styled(Dash)`
  transform-origin: center right;
  animation: spin4 3s linear infinite;
  animation-delay: .4s;
  @keyframes spin4 {
    0% {
      transform: rotate(0deg);
    }
    38% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-360deg);
    }
    65% {
      transform: rotate(-370deg);
    }
    75% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const Preloader = () => (
  <LoadWrap>
    <Loader>
      <Dash1>L</Dash1>
      <Dash2>O</Dash2>
      <Dash3>A</Dash3>
      <Dash4>D</Dash4>
    </Loader>
  </LoadWrap>
);