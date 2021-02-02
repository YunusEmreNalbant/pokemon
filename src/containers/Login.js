import React, {useState} from 'react';
import "./Login.css"
import {connect, useSelector, useDispatch} from 'react-redux'
import axios from "axios";
import {loginAction} from "../actions/authAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from "lodash";
import {Link} from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginReducer = useSelector(state => state.loginReducer);

    const resultLogin= ()=>{
        if (loginReducer.loggedIn) {
            localStorage.setItem('token',loginReducer.token);
        }
        if (loginReducer.loading) {
            return <CircularProgress color="secondary"/>;
        }

        if (loginReducer.errorMsg !== "") {
            return <p>{loginReducer.errorMsg}</p>
        }
    };
    const handleSubmit  = (e) => {
        e.preventDefault();
        dispatch(loginAction(email,password))
        resultLogin(loginReducer);
    };


    return (
        <div className={"login"}>
            <form className={"login__form"} onSubmit={(e) => handleSubmit(e)}>
                <h1>Giriş Yap</h1>
                <input  type={"email"} placeholder={"E-Posta Adresi"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <input type={"password"} placeholder={"Şifre"} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <button type={"submit"} className={"submit__btn"}>Giriş Yap</button>
                {resultLogin()}
            </form>
        </div>
    );
};

export default Login;
