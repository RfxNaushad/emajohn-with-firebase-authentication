import React from 'react';
import useAuth from '../../hooks/useAuth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();
    return (
        <Route
         {...rest}
         render= { ({location})=> user.email? children
         :
         <Redirect
           to={{
            pathname:"/login",
            state: { from: location }        
           }}
         >
         </Redirect>}

        >
         
        </Route>
    );
};

export default PrivateRoute;