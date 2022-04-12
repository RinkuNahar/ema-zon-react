import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    const handleSubmitForm = event =>{
        event.preventDefault();
      if(password !== confirmPassword){
          setError('Your Password did not match');
          return;
      }
    }


    return (
        <div className='form-container'>
        <form action="" onSubmit={handleSubmitForm} >
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