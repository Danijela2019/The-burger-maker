import React from 'react';
import './App.css';
import Layout from './components/Layout';
import {MainBoard} from './components/MainBoard';

function App() {
  return (
    <div className="App">
      <h1>Make your own burger</h1>
      <Layout> 
    
        <MainBoard />
      </Layout>
    </div>
  );
}

export default App;
