import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import checkActiveNav from "../../functions/checkActiveNav";
// elements
import { Container } from "../Styled/Container";
import { PromoImage } from "./PromoImage";
// images
import beach from "../../image/beach.jpg";
import sport from "../../image/sport.jpg";
import umbrella from "../../image/umbrella.jpg";
import premium from "../../image/premium.jpg";
import sneakers from "../../image/sneakers.jpg";
import child from "../../image/child.jpg";
// store
import { setPageTitle } from "../../store/pageTitleSlice";

const PromoBlock = styled.ul`
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
  grid-column: 1/3;
  grid-row: 1/3;

  @media (max-width: 550px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;
const ReverseItemBig = styled.li`
  grid-column: 2/4;
  grid-row: 1/3;

  @media (max-width: 768px) {
    grid-column: 1/3;
  }

  @media (max-width: 550px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;
const DirectItemSmall = styled.li`
  grid-column: 3/4;

  @media (max-width: 768px) {
    grid-column: 1/2;

    &:nth-child(odd) {
      grid-column: 2/3;
    }
  }
  @media (max-width: 550px) {
    grid-column: 1/3;

    &:nth-child(odd) {
      grid-column: 1/3;
    }
  }
`;
const ReverseItemSmall = styled.li`
  grid-column: 1/2;

  @media (max-width: 768px) {
    grid-column: 1/2;

    &:nth-child(odd) {
      grid-column: 2/3;
    }
  }

  @media (max-width: 550px) {
    grid-column: 1/3;

    &:nth-child(odd) {
      grid-column: 1/3;
    }
  }
`;

const PromoPage = () => {
  const dispatch = useDispatch();
  // ставим тайтл
  useEffect(() => dispatch(setPageTitle("Lomoda")));
  // убираем подсветку активной ссылки в nav
  useEffect(() => checkActiveNav());

  return (
    <Container>
      <PromoBlock>
        <DirectItemBig>
          <PromoImage src={beach} alt="beach" />
        </DirectItemBig>
        <DirectItemSmall>
          <PromoImage src={sport} alt="sport" />
        </DirectItemSmall>
        <DirectItemSmall>
          <PromoImage src={umbrella} alt="umbrella" />
        </DirectItemSmall>
      </PromoBlock>
      <PromoBlock>
        <ReverseItemBig>
          <PromoImage src={premium} alt="premium" />
        </ReverseItemBig>
        <ReverseItemSmall>
          <PromoImage src={sneakers} alt="sneakers" />
        </ReverseItemSmall>
        <ReverseItemSmall>
          <PromoImage src={child} alt="child" />
        </ReverseItemSmall>
      </PromoBlock>
    </Container>
  );
};
export default PromoPage;
