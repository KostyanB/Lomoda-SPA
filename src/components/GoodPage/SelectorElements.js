import styled from 'styled-components';

export const SelectWrapper = styled.div`
    position: relative;
    @media (max-width: 968px) {
        margin-bottom: 0;
        -ms-grid-column: 3;
        -ms-grid-column-span: 1;
        grid-column: 3/4;
    }
    @media (max-width: 520px) {
        grid-column: auto;
        grid-row: auto;
    }
`;

export const GoodSelectBtn = styled.button`
    position: relative;
    padding: 8px 24px;
    text-align: left;
    background-color: transparent;
    width: 100%;
    height: 58px;
    border: 1px solid #888;
    border-radius: 3px;
    :after {
        content: '';
        position: absolute;
        right: 16px;
        top: 50%;
        height: 16px;
        width: 16px;
        margin-top: -4px;
        -webkit-transform: translateY(-50%) rotate(-45deg);
            -ms-transform: translateY(-50%) rotate(-45deg);
                transform: translateY(-50%) rotate(-45deg);
        border-style: solid;
        border-color: transparent transparent #000 #000;
        border-width: 1px;
        z-index: 1;
        -webkit-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        -o-transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out, margin-top 0.2s ease-in-out;
    }
    :hover {
        color: #0060d2;
        cursor: pointer;
    }
`;
