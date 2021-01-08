import React from "react";
import { Route } from "react-router-dom";

import Home from '../pages/home';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders/Orders';
import Layout from '../components/shared/layout/Layout';
import BurgerMaker from '../pages/burgerMaker';
import Logout from '../pages/auth/Logout';
import Auth from '../pages/auth'

const Routes = () => {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/burger" component={BurgerMaker} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/logout" component={Logout} />
      <Route path="/auth" component={Auth} />
    </Layout>
  );
}

export default Routes;