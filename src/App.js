import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from './modules/Functions/context';
import { GlobalStyle } from './modules/Styled/GlobalStyle';
// components
import { Header } from './modules/Headers/Header';
import { SubHeader } from './modules/Headers/SubHeader';
import { Footer } from './modules/Footer/Footer';
import { PromoPage } from './modules/PromoPage/PromoPage';
import { GoodsListPage } from './modules/GoodsListPage/GoodsListPage';
import { GoodPage } from './modules/GoodPage/GoodPage';
import { ModalCart } from './modules/CartModal/ModalCart';
import { ErrorLoad, Preloader } from './modules/Styled/Preloader';
// hooks
import { useHash } from './modules/Hooks/useHash';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// store
import { fetchGoods, selectNameList, selectGoodsObj } from './modules/store/goodsListSlice';
import { selectPageTitle, setPageTitle } from './modules/store/pageTitleSlice';
import { setSelectedGood } from './modules/store/goodPageSlice';
import { selectShowCart } from './modules/store/showCartSlice';
import { setUserCity } from './modules/store/userCitySlice';


function App() {
  const hashSet = useHash();

  const dispatch = useDispatch(),
    { status, error } = useSelector(state => state.goods),
    nameList = useSelector(selectNameList),
    goodsObj = useSelector(selectGoodsObj),
    pageTitle = useSelector(selectPageTitle),
    showCart = useSelector(selectShowCart);


  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  useEffect(() => {
    const city = (localStorage.getItem('lomoda-location'));
    (city) && dispatch(setUserCity(city));
  }, [dispatch]);

  useEffect(() => {
    const localHash = localStorage.getItem('lomoda-hash');
    const categoryList = Object.keys(nameList);

    if (localHash && categoryList.length > 0) {
      if (!categoryList.includes(localHash) && localHash !== 'main') {
        const good = goodsObj[localHash];
        dispatch(setSelectedGood(good));
        dispatch(setPageTitle(`${good.name} "${good.brand}"`));
      } else if (localHash === 'main') {
        dispatch(setPageTitle('Lomoda'));
      } else if (categoryList.includes(localHash)) {
        dispatch(setPageTitle(`Lomoda ${nameList[localHash]}`));
      }
    }
    document.title = pageTitle;
  }, [ dispatch, goodsObj, nameList, pageTitle]);

  return (
    <Context.Provider value={{
      hashSet,
    }}>
    {(status === 'success') &&
      <>
        <GlobalStyle/>
        <Header/>
        {/* <main> */}
          <SubHeader/>
          {(hashSet.showPage === 'main') && <PromoPage/>}
          {(hashSet.showPage === 'list') && <GoodsListPage/>}
          {(hashSet.showPage === 'card') && <GoodPage/>}
          {/* <Router>
            <Switch>
              <Route path="/main" component={PromoPage}/>
              <Route path="/goods" component={GoodsListPage}/>
            </Switch>
          </Router> */}
        {/* </main> */}
        <Footer/>
        {showCart && <ModalCart/>}
      </>
    }
    {(status === 'loading') && <Preloader/>}
    {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </Context.Provider>
  );
}

export default App;
