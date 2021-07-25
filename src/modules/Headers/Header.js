import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import { HeadersWrapper } from './HeadersWrapper';
import { HeaderCityButton } from './HeaderCityButton';
import birthdayImg from '../../image/35.svg';

const HeaderStyled = styled.header`
    background-color: #000;
    color: #fff;
`;
const HeaderWrapper = styled(HeadersWrapper)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    line-height: 40px;
`;
const HeaderRightBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 15px;
    height: 100%;
    @media (max-width: 480px) {
        display: none;
    }
`;
const HeaderTitle = styled.p`
        -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    height: 100%;
    cursor: pointer;
    -webkit-transition: background-color 0.3s;
    -o-transition: background-color 0.3s;
    transition: background-color 0.3s;
    :hover {
    background-color: #0060d2;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
const HeaderBirthday = styled.div`
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 24px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background-color: #f93c00;
    max-height: 100%;
    *:not(:last-child) {
        margin-right: 5px;
    }
`;
const HeaderImg = styled.img`
    max-height: 100%;
`;

export const Header = () => {

    return (
        <HeaderStyled>
            <Container>
                <HeaderWrapper>
                    <HeaderCityButton/>
                    <HeaderRightBlock>
                        <HeaderTitle>Бесконтактная доставка</HeaderTitle>
                        <HeaderTitle>Платите как удобно</HeaderTitle>
                        <HeaderBirthday>
                            <span>нам</span>
                            <HeaderImg src={birthdayImg} alt="35year"/>
                            <span>лет!</span>
                        </HeaderBirthday>
                    </HeaderRightBlock>
                </HeaderWrapper>
            </Container>
        </HeaderStyled>
    );
}
