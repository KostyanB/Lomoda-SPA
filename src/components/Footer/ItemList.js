import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const ColumnItem = styled.li`
    margin-bottom: 5px;
    :hover {
        color: ${env.hoverColor};
    }
`;

const Item = props => (
    <ColumnItem><a  href="#top">{props.name}</a></ColumnItem>
);

export const ItemList = ({ list }) => (
    <>
        {list.map(item => <Item key={item} name={item}/>)}
    </>
)