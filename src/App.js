import React, {useEffect, useState} from "react";
import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import Login from "./containers/Login";

function App() {
    const [checkAuth, setCheckAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        token ? setCheckAuth(true) : setCheckAuth(false);
    }, []);

    return checkAuth ? (
        <div className="App">
            <nav>
                <NavLink to={"/pokemon/test"}>Search</NavLink>
            </nav>
            <Switch>
                <Route path={"/"} exact component={PokemonList}/>
                <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
                <Redirect to={"/"}/>
            </Switch>
        </div>
    ) : <div className="App">
        <Switch>
            <Route path={"/login"} exact component={Login}/>
            <Redirect to={"/login"}/>
        </Switch>
    </div>;
}

export default App;
