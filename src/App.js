import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: "#303030"
      } 
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Switch>
      <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
