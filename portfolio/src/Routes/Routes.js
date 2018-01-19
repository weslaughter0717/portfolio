import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../Components/App/App'
import Home from '../Components/Home/Home'
import Assignments from '../Components/Assignments/Assignments'
export default (
    <Router history= {hashHistory}>
        <Route path = '/' component = {App}>
        <IndexRoute component = {Home}></IndexRoute>
        <Route path="/assignments" component={Assignments}></Route>
        </Route>
        </Router>
               );