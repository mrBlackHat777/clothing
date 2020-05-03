import React, { Component } from 'react';
import  './Homepage.styles.scss'
import Directory from '../../components/directory/Directory'
import {Route} from 'react-router-dom'


const Homepage =()=>{
return (
    <div className="homepage">
        <Directory/>
    </div>
)
}

export default Homepage;