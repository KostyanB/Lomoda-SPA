import React from 'react';
// import styled from 'styled-components';
import { Context } from './modules/Functions/context';
import { GlobalStyle } from './modules/Styled/GlobalStyle';
import { Header } from './modules/Headers/Header';
import { SubHeader } from './modules/Headers/SubHeader';
import { Footer } from './modules/Footer/Footer';
import { PromoPage } from './modules/PromoPage/PromoPage';
import { GoodsListPage } from './modules/GoodsListPage/GoodsListPage';
import { GoodCard } from './modules/GoodPage/GoodCard';
import { ErrorLoad, Preloader } from './modules/Styled/Preloader';
import { useUserCity } from './modules/Hooks/useUserSity';
import { useHash } from './modules/Hooks/useHash';
import { useFetch } from './modules/Hooks/useFetch';
import { usePageName } from './modules/Hooks/usePageName';
import { useShowPage } from './modules/Hooks/useShowPage';
import { usePageTitle } from './modules/Hooks/usePageTitle';
import { useSelectGood } from './modules/Hooks/useSelectGood';


function App() {
  const cityOfUserSet = useUserCity();
  const hashSet = useHash();
  const pageNameSet = usePageName();
  const dataBase = useFetch();
  const pageShow = useShowPage();
  const pageTitle = usePageTitle();
  const selectedGood = useSelectGood()

  return (
    <Context.Provider value={{
      cityOfUserSet,
      hashSet,
      pageNameSet,
      dataBase,
      pageShow,
      pageTitle,
      selectedGood,
    }}>
    {dataBase.responce ?
      <>
        <GlobalStyle/>
        <Header/>
        <main>
          <SubHeader/>
          { (pageShow.showPage === 'promo') ?
            <PromoPage/> : (pageShow.showPage === 'list') ?
              <GoodsListPage/> : (pageShow.showPage === 'card') ?
                <GoodCard/> : (pageShow.showPage === 'cart') ?
                  <h2>Корзина</h2> :
                    <ErrorLoad>Sorry, nework error. Please, reload page.</ErrorLoad>
          }
        </main>
      </> : dataBase.error ?
        <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad> :
        <Preloader/>
    }
    <Footer/>
    </Context.Provider>
  );
}

export default App;
