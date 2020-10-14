import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import AuthContext from "./components/config/Auth";

function App() {
    return (
        <AuthContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/logowanie"} component={Login}/>
                    <Route path={"/rejestracja"} component={Register}/>
                    <Route path={"/wylogowano"} component={Logout}/>
                </Switch>
            </BrowserRouter>
        </AuthContext>
    );
}

export default App;
