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
import {useState} from 'react';
const ToDoModal = (props) =>{
    const [text, setText] = useState(null);
    const [completed, setCompleted] = useState(null);

    return (<Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <TextField style={{width : '100%'}}
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows="4"
          defaultValue={props.todo.text}
          variant="outlined"
          onChange={(event)=>setText(event.target.value)}
        />
        <FormControlLabel
        control={
          <Checkbox
            defaultChecked={props.todo.completed}
            disabled={false}
            onChange={(event)=>{ setCompleted(!completed)}}
            color="primary"
          />
        }
        label="Primary"
      />
            
            </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={()=>{props.handleClose()}}>
            Close
          </Button>
          <Button color="primary" onClick={()=>{props.handleSubmit({text: text, completed: completed})}}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ToDoModal;