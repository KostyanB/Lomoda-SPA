import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/Styled/GlobalStyle';
// functions
import { getLocationStorage } from './components/Functions/handleStorage';
// components
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import PromoPage from './components/PromoPage';
import GoodsListPage from './components/GoodsListPage';
import GoodPage from './components/GoodPage';
import ModalCart from './components/ModalCart';
import Page404 from './components/Page404';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// store
import { fetchGoods, selectStatus, selectError } from './components/store/goodsListSlice';
import { selectShowCart } from './components/store/cartSlice';
import { setUserCity } from './components/store/userCitySlice';


function App() {

  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus),
    showCart = useSelector(selectShowCart);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  useEffect(() => {
    const city = getLocationStorage();
    (city) && dispatch(setUserCity(city));
  }, [dispatch]);

  return (
    <>
    {(status === 'success') &&
      <>
        <GlobalStyle/>
        <Header/>
        <Router>
          <SubHeader/>
            <Switch>
              <Route exact path="/" component={PromoPage}/>
              <Route path="/goods/:list" component={GoodsListPage}/>
              <Route path="/card/:good" component={GoodPage}/>
              <Route component={Page404}/>
            </Switch>
            {showCart && <ModalCart/>}
          </Router>
        <Footer/>

      </>
    }
    {(status === 'loading') && <Preloader/>}
    {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </>
  );
}

export default App;
