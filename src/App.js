import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import {connect} from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App(props) {
  console.log(props)
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: "#303030"
      } 
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ToDo
          </Typography>
          {localStorage.getItem("token") != null ? <Button color="inherit">ToDo</Button> : null}
          {localStorage.getItem("token") == null? <Link style={{textDecoration: "none"}} to="/login"><Button style={{color:"white", textDecoration: "none"}}>Login </Button></Link> : null}
          {localStorage.getItem("token")!= null ? <Button onClick={props.logout} color="inherit">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      {localStorage.getItem("token") == null? <Route exact path="/login" component={LoginPage} /> : null}
      <Redirect from="/" to="/"/>
      </Switch>
    </ThemeProvider>
  );
}
const mapStateToProps = state => 
 {
   return {token : state.userReducer.token}
  };
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      logout: () => dispatch({ type: 'logout' }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App);
