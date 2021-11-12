import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import env from '../../env.json';
// store
import { selectMessage } from '../../store/cartSlice';
// styled
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${env.hoverColor};
    font-size: 2em;
    text-align: center;
`;

const Message = () => {

    const text = useSelector(selectMessage);

    return (
        <Wrap>
            {text}
        </Wrap>
    )
}
export default Message;