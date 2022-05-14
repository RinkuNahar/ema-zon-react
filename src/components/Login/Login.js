import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import PageTitle from '../PageTitle/PageTitle';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [myError, setMyError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        setMyError('Your Password is not Correct');
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSignIn} >
                <div>
                    <h2 className='title'>Login</h2>
                    <div className='input-field'>
                        <label htmlFor="email">Email : </label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <br />
                    <div className='input-field'>
                        <label htmlFor="password">Password : </label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <br />
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <p>{myError}</p>
                    <div>
                        <input className='submit' type="submit" value="LogIn" />
                    </div>
                </div>
                <p className='login-p'>
                    New to Ema-zon? <Link className='form-link' to={'/signup'}>Create an Account</Link>
                </p>
            </form>
                    <PageTitle title="Login"></PageTitle>
        </div>
    );
};

export default Login;