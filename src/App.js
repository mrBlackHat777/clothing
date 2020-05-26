import React from 'react';

import './App.css';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/ShopPage'
import  Header from './components/Header/Header'
import  SignUpSignIn from './pages/SignUpSignIn/SignUpSignIn'
import {auth,createUserProfilDocument} from './firebase/firebase.utils'
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
    // open subscription (listener)
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ //check if signin
        const userRef= await createUserProfilDocument(userAuth);
        userRef.onSnapshot(snapShot=>{ //subscribe 
         console.log(snapShot.data())
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>{
            console.log(this.state)
          })
          
          
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); //close subscription
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
