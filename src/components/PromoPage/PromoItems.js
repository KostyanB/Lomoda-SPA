import styled from 'styled-components';

export const PromoItemBig = styled.li`
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1/3;
    @media (max-width: 550px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
    }
`;

export const PromoItemSmall = styled.li`
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