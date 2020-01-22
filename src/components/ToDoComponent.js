import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToDoModal from './ToDoModal';
import {useState} from 'react';
import {updateTodo, deleteTodo} from '../store/todo/actions'
import Box from '@material-ui/core/Box';
import {useDispatch} from 'react-redux';

  
const ToDoComponent = (props) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    //MODAL za EDIT
    const [show, setShow] = useState(false);
    const handleClose = ()=>{
      setShow(false);
    }
    const handleEdit=(todo)=>{
        dispatch(updateTodo({
          ...todo
        }));
        handleClose();
    }
    const handleDelete = () =>{
      dispatch(deleteTodo({
        id : props.todo.id
      }));
    }

    const getCollor=() =>{
      if (props.todo.priority === "LOW"){
        return "#fef3bd";
      }else if (props.todo.priority === "MEDIUM"){
        return "#FF8A65";
    
      }else{
        return "#f44336";
      }
    }  
    console.log(props.todo.completed)
    return (
      <div>
        <Card className={classes.card} >
          <CardContent>
            <Typography className={classes.title} variant="body2" component="h1">
              {props.todo.title}
              <Button style={{display:"inline",float:"right",backgroundColor:getCollor(), color:"white"}} disabled>
              {props.todo.priority}
              </Button>
            </Typography>
            <Typography className={classes.content} variant="body2" component="p">
                {props.todo.description}
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.todo.completed == 1 ? true: false}
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
          todo={props.todo} 
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