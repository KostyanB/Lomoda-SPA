import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';
import { PromoImage } from './PromoImage';
import { PromoItemBig, PromoItemSmall } from './PromoItems';
import beach from '../../image/beach.jpg';
import sport from '../../image/sport.jpg';
import umbrella from '../../image/umbrella.jpg';
import premium from '../../image/premium.jpg';
import sneakers from '../../image/sneakers.jpg';
import child from '../../image/child.jpg';

const PromoBlock = styled.ul`
    display: -ms-grid;
    display: grid;
    gap: 16px;
    margin-bottom: 16px;
`;
const PromoDirectItemBig = styled(PromoItemBig)`
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
`;
const PromoReverseItemBig = styled(PromoItemBig)`
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
    grid-column: 2/4;
    @media (max-width: 768px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
    }
`;
const PromoDirectItemSmall = styled(PromoItemSmall)`
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    grid-column: 3/4;
`;
const PromoReverseItemSmall = styled(PromoItemSmall)`
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
`;

export const PromoPage = () => (
    <section className="promo">
        <Container>
            <PromoBlock>
                <PromoDirectItemBig>
                    <PromoImage src={beach} alt="beach"/>
                </PromoDirectItemBig>
                <PromoDirectItemSmall>
                    <PromoImage src={sport} alt="sport"/>
                </PromoDirectItemSmall>
                <PromoDirectItemSmall>
                    <PromoImage src={umbrella} alt="umbrella"/>
                </PromoDirectItemSmall>
            </PromoBlock>
            <PromoBlock>
                <PromoReverseItemBig>
                    <PromoImage src={premium} alt="premium"/>
                </PromoReverseItemBig>
                <PromoReverseItemSmall>
                    <PromoImage src={sneakers} alt="sneakers"/>
                </PromoReverseItemSmall>
                <PromoReverseItemSmall>
                    <PromoImage src={child} alt="child"/>
                </PromoReverseItemSmall>
            </PromoBlock>
        </Container>
    </section>
)