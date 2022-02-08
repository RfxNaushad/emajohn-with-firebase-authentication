import React from 'react';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    // const{user, logOut} = useFirebase();
   const {user, logOut} = useAuth()
   console.log(user)
    return (
        <div className="header">
            <img className="logo" src={logo} alt=''></img>
            <nav>
                <NavLink to="/shop">shop</NavLink>
                <NavLink to="/review">order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {/* <img className='nav-img' src={user.photoURL} alt=''></img*/}
                {
                        user.email &&  
                        <div>
                            <span style={{color: 'white'}}>Hello {user.displayName}</span>
                            <img className='nav-img' src={user.photoURL} alt=''></img>                
                        </div> 
                }
                {

                    user.email? <button onClick={logOut}>log out</button> : <NavLink to="/login">Login</NavLink>

                }

            </nav>
        </div>
    );
};

export default Header;