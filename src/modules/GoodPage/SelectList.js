import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: none;
    position: absolute;
    max-height: 150px;
    overflow: auto;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    border: 1px solid #000;
    border-top-color: #ccc;
    padding: 0;
`;
const Li = styled.li`
    padding: 8px;
    :hover {
        background-color: #ccc;
    }
`;

export const SelectList = props => {
    return (
        <List>
            {props.items.map(val => <Li>{val}</Li>)}
        </List>
    );
}