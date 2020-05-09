import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useEffect, useContext, useReducer } from 'react'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login2 from "./Login2";
import TestPage from "../pages/TestPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";


export default function AppRouter(props) {

  return (

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/login2">
        <Login2 />
      </Route>
      <Route path="/test">
        <TestPage />
      </Route>

      <Route path="/register">
        <RegisterPage />
      </Route>

  

    </Switch>

  )

}