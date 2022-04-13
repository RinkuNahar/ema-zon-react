import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }

    const handleSubmitForm = event =>{
        event.preventDefault();
      if(password !== confirmPassword){
          setError('Your Password did not match');
          return;
      }
    //   already have condition that min have to be 6 character in password
      createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
        <form  onSubmit={handleSubmitForm} >
        <div>
             <h2 className='title'>SignUp</h2>
              <div className='input-field'>
                  <label htmlFor="email">Email : </label>
                  <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
              </div>
                  <br />
              <div className='input-field'>
              <label htmlFor="password">Password : </label>
                  <input  onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
              </div>
              <br />
              <div className='input-field'>
              <label htmlFor="confirm-password">Confirm Password : </label>
                  <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" id="" required/>
              </div>
              <br />
              <p style={{color: 'red', fontWeight:'bold'}}>
                {error}
              </p>
              <br />
              <div>
              <input className='submit' type="submit" value="Sign Up" />
              </div>
             </div>
             <p className='login-p'>
           Already have an Account? <Link className='form-link' to={'/login'}>Please login</Link>
           </p>
        </form>
  
          </div>
    );
};

export default SignUp;