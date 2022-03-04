import React, { useEffect, useMemo, Suspense } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import checkActiveNav from '../../functions/checkActiveNav';
// elements
import { Container } from '../Styled/Container';
import PromoImage from './PromoImage';
import { Preloader } from '../Styled/Preloader';
// store
import { setPageTitle } from '../../store/pageTitleSlice';
import { getPromo, selectPromo } from '../../store/promoSlice';
// env
import env from '../../env.json';

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
const DirectBig = styled.li`
  grid-column: 1/3;
  grid-row: 1/3;

  @media (max-width: 550px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;
const ReverseBig = styled.li`
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
const DirectSmall = styled.li`
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
const ReverseSmall = styled.li`
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
  const promoUrl = useMemo(() => env.backend.promoUrl, []);
  const dispatch = useDispatch();
  const promoDb = useSelector(selectPromo);

  useEffect(() => {
    // ставим тайтл
    dispatch(setPageTitle('Lomoda'));
    // убираем подсветку активной ссылки в nav
    checkActiveNav();
    // грузим фото если еще нет
    !promoDb && dispatch(getPromo(promoUrl));
  }, [promoDb, promoUrl, dispatch]);

  return (
    <Suspense fallback={Preloader}>
      {promoDb && (
        <Container>
          <PromoBlock>
            <DirectBig>
              <PromoImage photo={promoDb['img1']} />
            </DirectBig>
            <DirectSmall>
              <PromoImage photo={promoDb['img2']} />
            </DirectSmall>
            <DirectSmall>
              <PromoImage photo={promoDb['img3']} />
            </DirectSmall>
          </PromoBlock>
          <PromoBlock>
            <ReverseBig>
              <PromoImage photo={promoDb['img4']} />
            </ReverseBig>
            <ReverseSmall>
              <PromoImage photo={promoDb['img5']} />
            </ReverseSmall>
            <ReverseSmall>
              <PromoImage photo={promoDb['img6']} />
            </ReverseSmall>
          </PromoBlock>
        </Container>
      )}
    </Suspense>
  );
};
export default PromoPage;
