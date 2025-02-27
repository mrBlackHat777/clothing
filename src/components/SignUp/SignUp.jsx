import React, { Component } from 'react';

import FormInput from '../formInput/FormInput'
import './SignUp.scss'
import {auth,createUserProfilDocument} from '../../firebase/firebase.utils'
import CustomButton from '../CustomButton/CustomButton';
class SignUp extends Component {
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state
        if(password !== confirmPassword){
            alert("password don't match")
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password) //return a new   user 
            await createUserProfilDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })


        }catch(error){
            console.log(error)
        }
      
    }

    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render() {
        const {displayName,email,password,confirmPassword}=this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>  I do not have an account </h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                
                <FormInput  type='text' name='displayName' value ={displayName} onChange={this.handleChange} label={'Display Name'} required/>
                <FormInput  type='email' name='email' value ={email} onChange={this.handleChange} label={'Email'} required/>
                <FormInput  type='password' name='password' value ={password} onChange={this.handleChange} label={'Password'} required/>
                <FormInput  type='password' name='confirmPassword' value ={confirmPassword} onChange={this.handleChange} label={'Confirm password'} required/>
                <CustomButton type='submit'> Sign Up </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
