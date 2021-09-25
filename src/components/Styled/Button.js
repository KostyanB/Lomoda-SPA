import styled from 'styled-components';
import env from '../../env.json';

export const Button = styled.button`
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    color: #fff;
    background-color: ${env.hoverColor};
    -webkit-box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
            box-shadow: 0 2px 8px 0 rgba(39, 150, 255, 0.6);
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 32px;
    :hover {
        color: ${env.hoverColor};
        background-color: #fff;
    }
    :active {
        -webkit-box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
            box-shadow: 0 2px 14px 0 rgba(39, 150, 255, 0.8);
    }
`;
