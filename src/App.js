import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// functions
import { getCartStorage } from './functions/handleStorage';
// context
import { Context } from './context';
// components
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import ModalCart from './components/ModalCart';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// store
import { getGoods, selectStatus, selectError } from './store/getGoodsSlice';
import { setCardFromStorage } from './store/cartSlice';

// env
import env from './env.json';

function App() {
  const dispatch = useDispatch(),
    error = useSelector(selectError),
    status = useSelector(selectStatus);

  const { dbUrl } = env.backend;

  const {
    modalOpen: { isModalOpen },
  } = useContext(Context);

  useEffect(() => {
    // получение товаров с сервера
    dispatch(getGoods(dbUrl));

    // установка корзины если есть в LocalStorage
    const cartStorage = getCartStorage();
    cartStorage && dispatch(setCardFromStorage(cartStorage));
  }, [dispatch, dbUrl]);

  return (
    <>
      {status === 'success' && (
        <>
          <GlobalStyle />
          <Header />
          <Router>
            <SubHeader />
            <AnimatedRoutes />
            {isModalOpen && <ModalCart />}
          </Router>
          <Footer />
        </>
      )}
      {status === 'loading' && <Preloader />}
      {error && (
        <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>
      )}
    </>
  );
}

export default App;
