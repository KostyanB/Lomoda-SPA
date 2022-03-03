import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SelectorContextProvider } from "../Context";
// components
import { Container } from "../Styled/Container";
import Page404 from "../Page404/Page404";
import GoodImage from "./GoodImage";
import GoodTitle from "./GoodTitle";
import GoodPrice from "./GoodPrice";
import GoodSelector from "./GoodSelector";
import BuyButton from "./BuyButton";
// store
import { selectGoodsEntities } from "../../store/goodsSlice";
import { setPageTitle } from "../../store/pageTitleSlice";
import { setSelectedId, resetSelectors } from "../../store/selectedParamSlice";
import {
  checkDisableBuy,
  setColorInit,
  setSizeInit,
} from "../../store/buyButtonSlice";

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

const GoodPage = () => {
  const dispatch = useDispatch();
  const { good } = useParams();
  const selectGood = useSelector(selectGoodsEntities)[good];

  // утановка window.title
  useEffect(() => {
    const pageTitle = selectGood
      ? `${selectGood.name} "${selectGood.brand}"`
      : "Lomoda";
    dispatch(setPageTitle(pageTitle));
  }, [dispatch, selectGood]);

  // вкл/откл кнопки
  useEffect(() => {
    // если sizes|color undefined -> ставим флаги true для вкл кнопки
    selectGood?.color === undefined
      ? dispatch(setColorInit(true))
      : dispatch(setColorInit(false));

    selectGood?.sizes === undefined
      ? dispatch(setSizeInit(true))
      : dispatch(setSizeInit(false));
    // проверяем состояние кнопки
    dispatch(checkDisableBuy());
    // сброс селекторов
    dispatch(resetSelectors());
    dispatch(setSelectedId(good));
  }, [dispatch, selectGood, good]);

  return (
    <SelectorContextProvider>
      {selectGood === undefined ? (
        <Page404 />
      ) : (
        <Wrapper>
          <GoodImage photo={selectGood.photo} name={selectGood.name} />
          <Description>
            <GoodTitle brand={selectGood.brand} name={selectGood.name} />
            <GoodPrice cost={selectGood.cost} />
            {selectGood.color && (
              <GoodSelector name="colorList" param={selectGood.color} />
            )}
            {selectGood.sizes && (
              <GoodSelector name="sizeList" param={selectGood.sizes} />
            )}
            <BuyButton />
          </Description>
        </Wrapper>
      )}
    </SelectorContextProvider>
  );
};
export default GoodPage;
