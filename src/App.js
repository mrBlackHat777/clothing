import React from 'react';

import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/ShopPage'
import  Header from './components/Header/Header'
const HatsPage=()=>(
  <div>
      <h1>aa</h1>
  </div>
)
function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route   path='/shop/hats' component={HatsPage} />
       <Route   exact path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
