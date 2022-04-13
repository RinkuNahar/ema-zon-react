import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   const [address, setAddress] = useState('');
   const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleSubmitForm = event =>{
        event.preventDefault();
    
    }
    return (
        <div className='form-container'>
              <form onSubmit={handleSubmitForm} >
      <div>
           <h2 className='title'>Shipping Information</h2>
           <div className='input-field'>
                <label htmlFor="name">Your Name </label>
                <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
            </div>
            <br />

            <div className='input-field'>
                <label htmlFor="email">Your Email </label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
                <br />

            <div className='input-field'>
            <label htmlFor="address">Address </label>
                <input onBlur={handleAddressBlur} type="password" name="password" id="" required />
            </div>
            <br />

            <div className='input-field'>
                <label htmlFor="">Phone</label>
                <input onBlur={handlePhoneBlur} type="text" name="name" id="" required/>
            </div>
            <br />
          
            <div>
            <input  className='submit' type="submit" value="Confirm Shipment" />
            </div>
           </div>
           <p className='login-p'>
          New to Ema-zon? <Link className='form-link' to={'/signup'}>Create an Account</Link>
         </p>
      </form>
        </div>
    );
};

export default Shipment;