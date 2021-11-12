import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring'
// components
import PromoPage from '../PromoPage';
import GoodsListPage from '../GoodsListPage';
import GoodPage from '../GoodPage';
import Page404 from '../Page404';

const AnimatedRoutes = () => {
    const location = useLocation();

    const transitions = useTransition(location, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return transitions((props, item) => (
        <animated.div style={props}>
            <Switch location={item}>
                <Route exact path="/" component={PromoPage}/>
                <Route path="/goods/:list" component={GoodsListPage}/>
                <Route path="/card/:good" component={GoodPage}/>
                <Route component={Page404}/>
            </Switch>
        </animated.div>
    ));
};
export default AnimatedRoutes;