import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      width: '100%',
      textAlign: 'left',
      
    },
    content:{
        height: '20vh',
    },
    bullet: {
      display: 'inline',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
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
  
const ToDoComponent = (props) =>{
    const classes = useStyles();
    return (
        <Card className={classes.card}>
      <CardContent>
        
        <Typography className={classes.content} variant="body2" component="p">
            {props.text}
        </Typography>
        <FormControlLabel
        control={
          <Checkbox
            checked={props.completed}
            value="true"
            color="primary"
          />
        }
        label="Completed"
      />
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="small">Delete</Button>
        <Button className={classes.button}  size="small">Edit</Button>
      </CardActions>
    </Card>
    )
}
export default ToDoComponent;