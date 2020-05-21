import React from 'react';

import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/ShopPage'
import  Header from './components/Header/Header'
import  SignUpSignIn from './components/SignIn/SignIn'
import {auth} from './firebase/firebase.utils'
const HatsPage=()=>(
  <div>
      <h1>aa</h1>
  </div>
)
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route   path='/shop/hats' component={HatsPage} />
       <Route   exact path='/shop' component={ShopPage} />
       <Route   path='/signin' component={SignUpSignIn} />
      </Switch>
      
    </div>
  );
 }
}

export default App;
