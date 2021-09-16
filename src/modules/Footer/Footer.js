import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import fB from '../../image/facebook.svg';
import fbHov from '../../image/facebook_hover.svg';
import vK from '../../image/vk.svg';
import vkHov from '../../image/vk_hover.svg';
import yT from '../../image/youtube.svg';
import ytHov from '../../image/youtube_hover.svg';
import iG from '../../image/instagram.svg';
import igHov from '../../image/instagram_hover.svg';
import asImg from '../../image/footer__icon-appstore.svg';
import gpImg from '../../image/footer__icon-googleplay.svg';
import hsImg from '../../image/footer__icon-huaweistore.svg';
import mcardImg from '../../image/footer__icon-mastercard.svg';
import visaImg from '../../image/footer__icon-visa.svg';
import mirImg from '../../image/footer__icon-mir.svg';

const FooterStyle = styled.footer`
    padding: 25px 0;
    background-color: #000;
    color: #fff;
`;
const Columns = styled(Container)`
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    gap: 30px;
    /* -ms-grid-columns: (1fr)[4]; */
        grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1096px) {
        /* -ms-grid-columns: (1fr)[2]; */
            grid-template-columns: repeat(2, 1fr);
        }
    @media (max-width: 520px) {
        -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
    }
`;
// const Column = props => <div class={props.name}></div>;

const ColumnTitle = styled.h3`
    margin-bottom: 10px;
`;
const ColumnList = styled.ul`
    :not(:last-child) {
        margin-bottom: 20px;
    }
`;
const ColumnIcons = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;
const ColumnItem = styled.li`
    margin-bottom: 5px;
    :hover {
        color: #2796FF;
    }
`;
const Item = props => (
    <ColumnItem><a  href="#top">{props.name}</a></ColumnItem>
);
const ItemList1 = () => (
    <>
    <Item name="Статус заказа по номеру"/>
    <Item name="Центр поддержки Lomoda"/>
    <Item name="Как оформить заказ"/>
    <Item name="Условия доставки"/>
    <Item name="Мои заказы"/>
    <Item name="Возврат"/>
    </>
);
const ItemList2 = () => (
    <>
        <Item name="Fashion-блог Lomoda"/>
        <Item name="Подарочные сертификаты Lomoda"/>
        <Item name="Вакансии" />
    </>
);
const Icon = styled.li`
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
const Mcard = styled(Icon)`
    width: 43px;
    height: 28px;
    background-image: url(${mcardImg});
`;
const Visa = styled(Icon)`
    width: 49px;
    height: 16px;
    background-image: url(${visaImg});
`;
const Mir = styled(Icon)`
    width: 57px;
    height: 16px;
    background-image: url(${mirImg});
`;
const SocIcon = styled(Icon)`
    width: 24px;
    height: 24px;
`;
const Fb = styled(SocIcon)`
    background-image: url(${fB});
    :hover {
        background-image: url(${fbHov});
}
`;
const Vk = styled(SocIcon)`
    background-image: url(${vK});
    :hover {
        background-image: url(${vkHov});
    }
`;
const Yt = styled(SocIcon)`
    background-image: url(${yT});
    :hover {
        background-image: url(${ytHov});
    }
`;
const Ig = styled(SocIcon)`
    background-image: url(${iG});
    :hover {
        background-image: url(${igHov});
    }
`;
const ColumnIconsApp = styled(ColumnIcons)`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
`;
const AppIcon = styled(Icon)`
    display: block;
    width: 85px;
    height: 25px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;
const AsIcon = styled(AppIcon)`
    background-image: url(${asImg});
`;
const GpIcon = styled(AppIcon)`
    background-image: url(${gpImg});
`;
const HsIcon = styled(AppIcon)`
    background-image: url(${hsImg});
`;

export const Footer = () => {

    return (
        <FooterStyle>
            <Columns>
                <div>
                    <ColumnTitle>Помощь</ColumnTitle>
                    <ColumnList>
                        <ItemList1/>
                    </ColumnList>
                </div>

                <div>
                    <ColumnTitle>О нас</ColumnTitle>
                    <ColumnList>
                            <ColumnIcons>
                                <Fb/>
                                <Vk/>
                                <Yt/>
                                <Ig/>
                            </ColumnIcons>
                        <ItemList2/>
                    </ColumnList>
                </div>

                <div>
                    <div className="footer__column-item">
                        <ColumnTitle>Способы оплаты</ColumnTitle>
                        <ColumnIcons>
                            <Mcard/>
                            <Visa/>
                            <Mir/>
                        </ColumnIcons>
                    </div>
                    <p className="footer__column-item">
                        Вы можете оплатить покупки<br/>
                        наличными при получении, либо<br/>
                        выбрать <a href="#top">другой способ оплаты</a>.</p>
                </div>

                <div>
                    <ColumnTitle>Для мобильных устройств</ColumnTitle>
                    <ColumnIconsApp>
                        <AsIcon/>
                        <GpIcon/>
                        <HsIcon/>
                    </ColumnIconsApp>
                    <p className="footer__column-item">Вы также можете перейти<br/>
                        на <a href="#top">мобильную версию сайта</a>.</p>
                </div>
            </Columns>
        </FooterStyle>
    );
}