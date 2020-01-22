import React, {useEffect, useState}from 'react';
import ToDoComponent from '../components/ToDoComponent'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from 'react-redux'
import { getAllTodos, createTodo} from "../store/todo/actions";
import Button from '@material-ui/core/Button';
import ToDoModal from '../components/ToDoModal'
const ToDos = (props) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    
    //MODAL za EDIT
    const [show, setShow] = useState(false);
    const handleClose = ()=>{
      setShow(false);
    }
    const todos = useSelector(state => state.todoReducer.todos);
    const handleAdd = payload =>{
        dispatch(
          createTodo({...payload})
        )
        handleClose();
    }
    const allTodos = () =>{
      dispatch(
          getAllTodos(null)
        );
    };
    useEffect(() => {
      
      allTodos();
      console.log(todos);

    }, []);
    const emptyTodo = {
      title : "",
      description : "",
      completed : false,
      priority : "LOW"
    }
    const generateTodosUi = ()=>{
      if (todos != null){
        todos.map(function(todo, index){
          return (<Grid  key={index} item xs={3}> 
            <ToDoComponent  text={todo.text} completed={todo.completed} />
          </Grid>)
      
        });
      }else{
        return null;
      }
    }
    return (
        <div>
          <Button style={{marginTop:"2%", marginLeft:"45%"}}onClick={() => setShow(true)}size="small">Add new todo</Button>
          <Grid container className={classes.root} justify="center" spacing={5}>
              {todos.map(function(todo, index){
                return (<Grid  key={index} item xs={3}> 
                        <ToDoComponent  todo={todo} />
                      </Grid>)
              })}
          </Grid>
          {show === true ? 
            <ToDoModal 
              show={show} 
              todo={emptyTodo} 
              handleSubmit={handleAdd} 
              handleClose ={handleClose}
              title="Add todo"/> 
            : null}
        </div>
    );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 4,
    textAlign: 'center',
    padding : '2%',
    
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  todo : {
      
      padding: '10% 10% 10% 10%'
  }
}));
export default ToDos;