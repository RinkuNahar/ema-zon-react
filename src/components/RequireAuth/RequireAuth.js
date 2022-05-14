import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const [user] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if(!user.emailVerified){
        return <div>
            <h3>Your email is not verified</h3>
            <h4>Please verify your email</h4>
            <button className='btn-btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}
      >
        Verify email
      </button>
        </div>
    }
    return children;
};

export default RequireAuth;