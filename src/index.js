import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoreContextProvider from "./components/StoreContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppRouter from './components/AppRouter'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import responsiveFontTheme from './assets/Theme';
import { Container } from '@material-ui/core';
import AppNavBar from './components/NavBar';


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <StoreContextProvider>
      <AppNavBar/>
        <ThemeProvider theme={responsiveFontTheme}>
            <App />
        </ThemeProvider>
        </StoreContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
