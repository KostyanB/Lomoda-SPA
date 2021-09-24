import React from 'react';
import styled from 'styled-components';
import { Container } from '../Styled/Container';

const Wrapper = styled(Container)`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f93c00;
    font-size: 30px;
`;

const Page404 = () => (
    <Wrapper>
        Упс, ошибка 404! Такой странички у нас нет!!!
    </Wrapper>

);
export default Page404;
