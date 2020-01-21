import logo from './logo.svg';
import './App.css';
import ToDoModal from './components/ToDoModal';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (todo) => {console.log(todo); setShow(false)}
  const todo = {text: "asd asd asd asd asd ", completed : true}
  return (
    <div className="App">
      <Button color="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <ToDoModal todo={todo} title="Add todo" show={show} handleClose={handleClose} handleSubmit={handleSubmit}></ToDoModal>
    </div>
  );
}

export default App;
