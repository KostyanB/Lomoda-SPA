import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// functions
import { getLocationStorage } from './components/Functions/handleStorage';
// components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import ModalCart from './components/ModalCart';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// store
import { getGoods, selectStatus, selectError } from './components/store/getGoodsSlice';
import { selectShowCart } from './components/store/cartSlice';
import { setUserCity } from './components/store/userCitySlice';

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus),
    showCart = useSelector(selectShowCart);

  // получение товаров с сервера
  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  // получение локации из LocalStorage
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
          <AnimatedRoutes/>
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