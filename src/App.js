import React from 'react';
import './App.css';
import Layout from './components/Layout';
import {MainBoard} from './components/MainBoard';
import Checkout from './components/Checkout';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Layout> 
      <Route path="/" exact component={ MainBoard} />
      <Route path="/checkout" component={Checkout} />
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
