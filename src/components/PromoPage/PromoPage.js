import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import checkActiveNav from '../../functions/checkActiveNav';
// elements
import { Container } from '../Styled/Container';
import { PromoImage } from './PromoImage';
// images
import beach from '../../image/beach.jpg';
import sport from '../../image/sport.jpg';
import umbrella from '../../image/umbrella.jpg';
import premium from '../../image/premium.jpg';
import sneakers from '../../image/sneakers.jpg';
import child from '../../image/child.jpg';
// store
import { setPageTitle } from '../../store/pageTitleSlice';

const PromoBlock = styled.ul`
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;
const DirectItemBig = styled.li`
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
        grid-column: 1/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
        grid-row: 1/3;

    @media (max-width: 550px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1/3;
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
            grid-row: 1/2;
    }
`;
const ReverseItemBig = styled.li`
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
        grid-column: 2/4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
        grid-row: 1/3;

    @media (max-width: 768px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1/3;
    }

    @media (max-width: 550px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1/3;
        -ms-grid-row: 1;
        -ms-grid-row-span: 1;
            grid-row: 1/2;
    }
`;
const DirectItemSmall = styled.li`
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
        grid-column: 3/4;

    @media (max-width: 768px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 1;
            grid-column: 1/2;
        :nth-child(odd) {
            -ms-grid-column: 2;
            -ms-grid-column-span: 1;
                grid-column: 2/3;
        }
    }
    @media (max-width: 550px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
            grid-column: 1/3;
        :nth-child(odd) {
            -ms-grid-column: 1;
            -ms-grid-column-span: 2;
                grid-column: 1/3;
        }
    }
`;
const ReverseItemSmall = styled.li`
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
        grid-column: 1/2;

    @media (max-width: 768px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 1;
        grid-column: 1/2;
        :nth-child(odd) {
            -ms-grid-column: 2;
            -ms-grid-column-span: 1;
            grid-column: 2/3;
        }
    }

    @media (max-width: 550px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        :nth-child(odd) {
            -ms-grid-column: 1;
            -ms-grid-column-span: 2;
            grid-column: 1/3;
        }
    }
`;

const PromoPage = () => {

    const dispatch = useDispatch();
    // ставим тайтл
    useEffect(() => dispatch(setPageTitle('Lomoda')));
    // убираем подсветку активной ссылки в nav
    useEffect(() => checkActiveNav());

    return (
        <Container>
            <PromoBlock>
                <DirectItemBig>
                    <PromoImage src={beach} alt="beach"/>
                </DirectItemBig>
                <DirectItemSmall>
                    <PromoImage src={sport} alt="sport"/>
                </DirectItemSmall>
                <DirectItemSmall>
                    <PromoImage src={umbrella} alt="umbrella"/>
                </DirectItemSmall>
            </PromoBlock>
            <PromoBlock>
                <ReverseItemBig>
                    <PromoImage src={premium} alt="premium"/>
                </ReverseItemBig>
                <ReverseItemSmall>
                    <PromoImage src={sneakers} alt="sneakers"/>
                </ReverseItemSmall>
                <ReverseItemSmall>
                    <PromoImage src={child} alt="child"/>
                </ReverseItemSmall>
            </PromoBlock>
        </Container>
    );
}
export default PromoPage;