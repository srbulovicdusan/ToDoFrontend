import React from 'react';
import ToDoComponent from '../components/ToDoComponent'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
const ToDos = (props) =>{
    const classes = useStyles();

    const todos = [
        {text : "Idi do prodavnice", completed: false},
        {text : "Zavrsi kurs", completed : true},
        {text : "tex text text text", completed: true},
        {text : "proba proba proba proba proba", completed : false}
    ]
    return (
        <div>
                    <Grid container className={classes.root} justify="center" spacing={5}>
                        {todos.map(function(todo, index){
                            return (<Grid  key={index} item xs={3}> 
                                        <ToDoComponent  text={todo.text} completed={todo.completed} />
                                    </Grid>)
                        })}
                    </Grid>
        </div>
    );
}
export default ToDos;