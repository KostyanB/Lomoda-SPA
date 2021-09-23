import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { checkScroll } from './modules/Functions/scrollControl';
import { GlobalStyle } from './components/Styled/GlobalStyle';
// functions
import { getHashStorage, getLocationStorage } from './components/Functions/handleStorage';
// components
import { Header } from './components/Headers/Header';
import { SubHeader } from './components/SubHeader/SubHeader';
import { Footer } from './components/Footer/Footer';
import { PromoPage } from './components/PromoPage/PromoPage';
import { GoodsListPage } from './components/GoodsListPage/GoodsListPage';
import { GoodPage } from './components/GoodPage/GoodPage';
import { ModalCart } from './components/CartModal/ModalCart';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';


// store
import { fetchGoods, selectNameList, selectGoodsObj } from './components/store/goodsListSlice';
import { selectPageTitle, setPageTitle } from './components/store/pageTitleSlice';
import { setSelectedGood } from './components/store/goodPageSlice';
import { setPageName } from './components/store/pageNameSlice';
import { selectShowCart } from './components/store/showCartSlice';
import { setUserCity } from './components/store/userCitySlice';
import { selectShowPage, setHash, setShowPage } from './components/store/hashSlice';


function App() {

  const dispatch = useDispatch(),
    { status, error } = useSelector(state => state.goods),
    nameList = useSelector(selectNameList),
    goodsObj = useSelector(selectGoodsObj),
    pageTitle = useSelector(selectPageTitle),
    showCart = useSelector(selectShowCart);
    // showPage = useSelector(selectShowPage);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  useEffect(() => {
    const city = getLocationStorage();
    (city) && dispatch(setUserCity(city));
  }, [dispatch]);

  useEffect(() => {
    const localHash = getHashStorage();
    const categoryList = Object.keys(nameList);


      //! если есть hash в local storage
    if (localHash && categoryList.length > 0) {

      dispatch(setHash(localHash));

      if (!categoryList.includes(localHash) && localHash !== 'main') {
        //! localHash выбранный товар
        const good = goodsObj[localHash];
        dispatch(setSelectedGood(good));
        dispatch(setPageTitle(`${good.name} "${good.brand}"`));
        dispatch(setShowPage('card'));
      } else if (localHash === 'main') {
        //! localHash главная
        dispatch(setPageTitle('Lomoda'));
        dispatch(setShowPage('main'));
      } else if (categoryList.includes(localHash)) {
        //! localHash в списке категорий
        dispatch(setPageTitle(`Lomoda ${nameList[localHash]}`));
        dispatch(setShowPage('goods'));
        dispatch(setPageName(nameList[localHash]));
      }
    } else {

    }
    document.title = pageTitle;
  }, [ dispatch, goodsObj, nameList, pageTitle]);


  return (

    <>


    {(status === 'success') &&
      <>
      <GlobalStyle/>
        <Header/>
        <Router>
          <SubHeader/>
          {/* {(showPage === 'main') && <PromoPage/>}
          {(showPage === 'goods') && <GoodsListPage/>}
          {(showPage === 'card') && <GoodPage/>} */}

            <Switch>
              <Route exact path="/" component={PromoPage}/>
              <Route path="/goods/:list" component={GoodsListPage}/>
              <Route path="/card/:good" component={GoodPage}/>
            </Switch>
          </Router>
        <Footer/>
        {showCart && <ModalCart/>}
      </>
    }
    {(status === 'loading') && <Preloader/>}
    {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </>
  );
}

export default App;
