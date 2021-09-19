import './App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, ButtonGroup } from 'react-bootstrap';


function App(props) {
  const [Text, setText]= useState("Sample text");

  const Capital=()=>{
    let newText= Text.toUpperCase();
    setText(newText);
  }
  const Small=()=>{
    let newText= Text.toLowerCase();
    setText(newText);
  }
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  return (
    <div className="App">
       <Navbar className="d-flex justify-content-center" bg="light">
      <Navbar.Brand><b>CASE CONVERTER</b></Navbar.Brand>
  </Navbar>
  <br/><br/>
  <Form >
  <Form.Group className="mb-3 TextArea" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Text Here</Form.Label>
    <Form.Control onChange={handleChange} value={Text} as="textarea" rows={10} />
  </Form.Group>
  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary" onClick={Capital}>Upper Case</Button>
  <Button variant="secondary" onClick={Small}>Lower Case</Button>
  <Button variant="secondary" onClick={()=>{setText("")}}>Clear</Button>
</ButtonGroup>
</Form>
    </div>
  );  
}

export default App;
