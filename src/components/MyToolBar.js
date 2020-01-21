import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {LOGOUT} from '../store/user/actions';
import { useSelector, useDispatch } from 'react-redux'

const MyToolBar = () =>{
    const token = useSelector(state => state.userReducer.token)
    const dispatch = useDispatch();
    const classes = useStyles();
    const logout = ()=> dispatch({ type: 'logout' });
    return (<AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        ToDo
      </Typography>
      {token != null ? <Button color="inherit">ToDo</Button> : null}
      {token == null? <Link style={{textDecoration: "none"}} to="/login"><Button style={{color:"white", textDecoration: "none"}}>Login </Button></Link> : null}
      {token == null? <Link style={{textDecoration: "none"}} to="/register"><Button style={{color:"white", textDecoration: "none"}}>Register </Button></Link> : null}

      {token!= null ? <Button onClick={logout} color="inherit">Logout</Button> : null}
    </Toolbar>
  </AppBar>);

}
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
export default MyToolBar;