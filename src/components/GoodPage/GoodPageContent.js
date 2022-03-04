import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//context
import { GoodPageContext } from '../../context';
// components
import { Container } from '../Styled/Container';
import GoodImage from './GoodImage';
import GoodTitle from './GoodTitle';
import GoodPrice from './GoodPrice';
import BuyButton from './BuyButton';
import GoodSelector from '../GoodSelector';
// store
import { selectGoodsEntities } from '../../store/goodsSlice';
import { setSelectedId, resetSelectors } from '../../store/selectedParamSlice';

const Wrapper = styled(Container)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 30px;
  @media (max-width: 968px) {
    -webkit-box-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;
const Description = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 750px;
  -ms-flex-preferred-size: 280px;
  flex-basis: 280px;
  @media (max-width: 968px) {
    display: -ms-grid;
    display: grid;
    gap: 20px;
  }
  @media (max-width: 520px) {
    display: -ms-grid;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    & > * {
      grid-column: 1/-1;
    }

    & > button {
      grid-row: 5;
    }
  }
`;

const GoodPageContent = () => {
  const dispatch = useDispatch();
  const { good } = useParams();
  const selectGood = useSelector(selectGoodsEntities)[good];

  const {
    buyButton: { setColorCheck, setSizeCheck },
  } = useContext(GoodPageContext);

  // вкл/откл кнопки
  useEffect(() => {
    // если sizes|color undefined -> ставим флаги true для вкл кнопки
    setColorCheck(selectGood?.color === undefined ? true : false);
    setSizeCheck(selectGood?.sizes === undefined ? true : false);

    // сброс селекторов
    dispatch(resetSelectors());
    dispatch(setSelectedId(good));
  }, [dispatch, selectGood, good, setColorCheck, setSizeCheck]);

  return (
    <Wrapper>
      <GoodImage photo={selectGood.photo} name={selectGood.name} />
      <Description>
        <GoodTitle brand={selectGood.brand} name={selectGood.name} />
        <GoodPrice cost={selectGood.cost} />
        {selectGood.color && (
          <GoodSelector name='colorList' param={selectGood.color} />
        )}
        {selectGood.sizes && (
          <GoodSelector name='sizeList' param={selectGood.sizes} />
        )}
        <BuyButton />
      </Description>
    </Wrapper>
  );
};
export default GoodPageContent;
