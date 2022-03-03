import React from "react";
import styled from "styled-components";
import env from "../../env.json";

const ColumnItem = styled.li`
  margin-bottom: 5px;

  &:hover {
    color: ${env.hoverColor};
  }
`;

const ItemList = ({ list }) => (
  <>
    {list.map(item => (
      <ColumnItem key={item}>
        <a href="#top">{item}</a>
      </ColumnItem>
    ))}
  </>
);
export default ItemList;
