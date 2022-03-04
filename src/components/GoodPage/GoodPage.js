import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//context
import { GoodPageContextProvider } from '../../context';
// components
import Page404 from '../Page404/Page404';
import GoodPageContent from './GoodPageContent';
// store
import { selectGoodsEntities } from '../../store/goodsSlice';
import { setPageTitle } from '../../store/pageTitleSlice';

const GoodPage = () => {
  const dispatch = useDispatch();
  const { good } = useParams();
  const selectGood = useSelector(selectGoodsEntities)[good];

  // утановка window.title
  useEffect(() => {
    const pageTitle = selectGood
      ? `${selectGood.name} "${selectGood.brand}"`
      : 'Lomoda';

    dispatch(setPageTitle(pageTitle));
  }, [dispatch, selectGood]);

  return (
    <>
      {selectGood === undefined ? (
        <Page404 />
      ) : (
        <GoodPageContextProvider>
          <GoodPageContent />
        </GoodPageContextProvider>
      )}
    </>
  );
};
export default GoodPage;
