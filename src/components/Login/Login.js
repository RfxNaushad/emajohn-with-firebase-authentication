import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop'

    console.log('came from', location.state?.from)
    const handleGoogleLogIn = ()=>{
         signInUsingGoogle()
         .then(result=>{
              history.push(redirect_uri);
         })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="email" name="" id=""></input>
                    <br></br>
                    <input type="password" name="" id=""></input>
                    <br></br>
                    <input type="submit" value="submit" id=""></input>
                </form>
                <p>New to ema-john?<Link to="/register"> Create Account</Link></p>
                <div>--------------------or---------------------</div>
                <button className='btn-regular' onClick={handleGoogleLogIn}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;