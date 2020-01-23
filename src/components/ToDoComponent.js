import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import ToDoModal from './ToDoModal';
import {updateTodo, deleteTodo} from '../store/todo/actions'


  
const ToDoComponent = ({todo, ...restProps}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    //MODAL za EDIT
    const [show, setShow] = useState(false);
    const handleClose = ()=>{
      setShow(false);
    }
    const handleEdit=(todo)=>{
        dispatch(updateTodo(todo));
        handleClose();
    }
    const handleDelete = () =>{
      dispatch(deleteTodo({
        id : todo.id
      }));
    }
    const COLOR_PER_PRIORITY = {
      MEDIUM: "#FF8A65",
      LOW: "#fef3bd",
      HIGH: "#f44336"
    } 
    const getCollor=() =>{
      return COLOR_PER_PRIORITY[todo.priority];
    }  
    return (
      <div>
        <Card className={classes.card} >
          <CardContent>
            <Typography className={classes.title} variant="body2" component="h1">
              {todo.title}
              <Button style={{display:"inline",float:"right",backgroundColor:getCollor(), color:"white"}} disabled>
              {todo.priority}
              </Button>
            </Typography>
            <Typography className={classes.content} variant="body2" component="p">
                {todo.description}
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed == 1 ? true: false}
                  value="true"
                  color="primary"
                />
              }
            label="Completed"
            />
          <br></br>
      </CardContent>
      <CardActions>
        <Button className={classes.button} onClick={() => handleDelete()}size="small">Delete</Button>
        <Button className={classes.button} onClick={()=>setShow(true)} size="small">Edit</Button>
      </CardActions>
    </Card>
    {show === true ? 
        <ToDoModal 
          show={show} 
          todo={todo} 
          handleSubmit={handleEdit} 
          handleClose ={handleClose}
          title="Edit todo"/> 
        : null}
    </div>
    )
}

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: '100%',
    textAlign: 'left',
    boxShadow: "1px 1px 1px 1px #9E9E9E"
  },
  content:{
      height: '10vh',
  },
  bullet: {
    display: 'inline',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    height: '10vh',
  },
  pos: {
    marginBottom: 12,
  },
  button:{
      display:'inline-block',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      margin: '0px auto',
  }
});
export default ToDoComponent;