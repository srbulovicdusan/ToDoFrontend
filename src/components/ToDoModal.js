import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalTitle from 'react-bootstrap/ModalTitle'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import {useState} from 'react';
const ToDoModal = (props) =>{
    const [description, setDescription] = useState(props.todo.description);
    const [completed, setCompleted] = useState(props.todo.completed);
    const [title, setTitle] = useState(props.todo.title);
    const [priority, setPriority] = useState(props.todo.priority);
    const [id, setId] = useState(props.todo.id)
    return (<Modal  show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <TextField 
            style={{marginBottom:"10px"}} 
            variant="outlined" 
            id="standard-basic" 
            label="Title" 
            defaultValue={props.todo.title} 
            onChange={(event)=>setTitle(event.target.value)}/>
          
          <TextField style={{width:"100%", marginBottom:"10px"}}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="4"
            defaultValue={props.todo.description}
            variant="outlined"
            onChange={(event)=>setDescription(event.target.value)}
          />

            <InputLabel  id="demo-simple-select-outlined-label">
              Priority
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={priority}
              onChange={(event)=>setPriority(event.target.value)}
              style={{width:"50%"}}
            >
              <MenuItem value={"LOW"}>LOW</MenuItem>
              <MenuItem value={"MEDIUM"}>MEDIUM</MenuItem>
              <MenuItem value={"HIGH"}>HIGH</MenuItem>
            </Select>
            <FormControlLabel
            style={{float:"right"}}
            control={
              <Checkbox
                defaultChecked={props.todo.completed == 1 ? true: false}
                disabled={false}
                onChange={(event)=>{ setCompleted(!completed)}}
                color="primary"
              />
            }
            label="Completed"
          />
            
            </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={()=>{props.handleClose()}}>
            Close
          </Button>
          <Button 
            color="primary" 
            onClick={()=>{props.handleSubmit(
              { description: description,
                completed: completed,
                priority: priority,
                title: title,
                id : id}
              )}}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ToDoModal;