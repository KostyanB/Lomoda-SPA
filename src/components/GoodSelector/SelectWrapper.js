import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  min-width: 200px;
  @media (max-width: 968px) {
    margin-bottom: 0;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    grid-column: 3/4;
  }
  @media (max-width: 520px) {
    grid-column: 1/3;
  }
`;

export default SelectWrapper;
