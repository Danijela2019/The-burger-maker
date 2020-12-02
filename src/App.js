import React from 'react';
import './App.css';
import Layout from './components/Layout';
import {MainBoard} from './components/MainBoard';
import Checkout from './components/Checkout';
import {BrowserRouter, Route} from 'react-router-dom';
import Orders from './components/Orders';
import Auth from './components/Auth'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Layout> 
      <Route path="/" exact component={ MainBoard} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/auth" component={Auth} />
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
