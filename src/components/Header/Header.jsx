import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link  className='logo-container' to="/">
                <Logo className='logo'/> 
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop </Link>
                <Link className='option' to='/shop'>Contact </Link>
                
                {
                   currentUser?(
                       <div  className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                   ):
                   (
                    <Link className='option' to='/signin'>SignIn </Link>
                   ) 
                }
            </div>
        </div>
    );
}

export default Header;
