import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
        <div>
            <h2>Register: Create Account</h2>
            <form onSubmit="">
                <input type="email" placeholder="email" name="" id=""></input>
                <br></br>
                <input type="password" name="" id=""></input>
                <br></br>
                <input type="password" name="" id="" placeholder='Re-enter-password'></input>
                <br></br>
                <input type="submit" value="" id="" ></input>
            </form>
            <p>already have an account<Link to='/login'>LoginIn</Link></p>
            <div>--------------------or---------------------</div>
            <button className='btn-regular'>Google SignIn</button>
        </div>
    </div>
    );
};

export default Register;