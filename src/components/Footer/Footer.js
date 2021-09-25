import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { Container } from '../Styled/Container';
import { ColumnTitle } from './FooterElems';
import { CardIcons } from './CardIcons';
import { AppIcons } from './AppIcons';
import { SocIcons } from './SocIcons';
import { ItemList } from './ItemList';

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
const ColumnList = styled.ul`
    :not(:last-child) {
        margin-bottom: 20px;
    }
`;

//  ****************************************************
const Footer = () => {
    return (
        <FooterStyle>
            <Columns>
                <div>
                    <ColumnTitle>Помощь</ColumnTitle>
                    <ColumnList>
                        <ItemList list={env.footerList1}/>
                    </ColumnList>
                </div>

                <div>
                    <ColumnTitle>О нас</ColumnTitle>
                    <ColumnList>
                        <SocIcons/>
                        <ItemList list={env.footerList2}/>
                    </ColumnList>
                </div>

                <div>
                    <div className="footer__column-item">
                        <CardIcons/>
                    </div>
                    <p className="footer__column-item">
                        Вы можете оплатить покупки<br/>
                        наличными при получении, либо<br/>
                        выбрать <a href="#top">другой способ оплаты</a>.</p>
                </div>
                <div>
                    <AppIcons/>
                    <p className="footer__column-item">Вы также можете перейти<br/>
                        на <a href="#top">мобильную версию сайта</a>.</p>
                </div>
            </Columns>
        </FooterStyle>
    );
};
export default Footer;