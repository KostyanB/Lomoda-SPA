import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import { HeaderCityButton } from './HeaderCityButton';
import birthdayImg from '../../image/35.svg';

const HeaderStyle = styled.header`
    background-color: #000;
    color: #fff;
    width: 100vw;
    padding-right: 17px;
`;
const Wrapper = styled(Container)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: 40px;
    line-height: 40px;
`;
const RightBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 15px;
    height: 100%;
    @media (max-width: 480px) {
        display: none;
    }
`;
const Title = styled.p`
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
        align-self: center;
    height: 100%;
    cursor: pointer;
    -webkit-transition: background-color 0.3s;
    -o-transition: background-color 0.3s;
    transition: background-color 0.3s;
    :hover {
        color: #2796FF;
    }
`;
const Birthday = styled.div`
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

    @media (max-width: 768px) {
        display: none;
    }
`;
const Img = styled.img`
    max-height: 100%;
`;

const Header = () => (
    <HeaderStyle>
        <Wrapper>
            <HeaderCityButton/>
            <RightBlock>
                <Title>Бесконтактная доставка</Title>
                <Title>Платите как удобно</Title>
                <Birthday>
                    <span>нам</span>
                        <Img src={birthdayImg} alt="35year"/>
                    <span>лет!</span>
                </Birthday>
            </RightBlock>
        </Wrapper>
    </HeaderStyle>
);
export default Header;
