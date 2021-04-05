import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Signup from './views/Signup';
import Profile from './views/Profile';
import Login from './views/Login';
import Product from './views/Product';
import SearchResults from './views/SearchResults';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/"/>;
}

export default function Routes() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path = "/search_results" component={SearchResults}/>
            <Route exact path = "/product/:id" component={Product}/>
            <Route exact path="/logout" component={Logout}/>
        </Switch>
    </Router>
    );
}
