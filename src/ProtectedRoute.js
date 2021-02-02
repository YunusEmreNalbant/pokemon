import React from 'react';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";

const isAuthenticated = localStorage.getItem('token');
const ProtectedRoute = ({component:Component,...rest}) => (
        <Route {...rest} component={(props)=>(
            isAuthenticated ? (<Component {...props} />): (<Redirect to={"/login"}/>)
        )}/>

    );

export default ProtectedRoute;
