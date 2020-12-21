import React from "react";
import { Route } from "react-router-dom";

import Home from '../pages/home';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders/Orders';
import Auth from '../pages/auth';
import Layout from '../components/shared/layout/Layout';
import BurgerMaker from '../pages/burgerMaker'

const Routes = () => {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/auth" component={Auth} />
      <Route path="/burger" component={BurgerMaker} />
    </Layout>
  );
}

export default Routes;