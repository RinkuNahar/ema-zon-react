import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
      <form action="" >
      <div>
           <h2 className='title'>Login</h2>
            <div className='input-field'>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="" required/>
            </div>
                <br />
            <div className='input-field'>
            <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="" required />
            </div>
            <br />
            <div>
            <input className='submit' type="submit" value="Form Submit" />
            </div>
           </div>
           <p className='login-p'>
          New to Ema-zon? <Link className='form-link' to={'/signup'}>Create an Account</Link>
         </p>
      </form>

        </div>
    );
};

export default Login;