import React from 'react'
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

import { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

export default function Login({ setToken }) {

    const [usernameState , setUsernameState] = useState("");
    const [passwordState , setPasswordState] = useState("");
    const [errorState , setErrorState] = useState(null);

    const history = useHistory();

    function login(){
      if(usernameState.trim() == ""){
        setErrorState("User name can not be empty");
        return;
      }

      if(passwordState.trim() == ""){
        setErrorState("password can not be empty");
        return;
      }

      axios.post("").then(res => {
        setToken(res.data.token)
        history.push("/");
      }).catch(err => {
        setErrorState(err.message)
      })
    }

    return (
        <>
        <hr/>
        <Form className="mt-5" className='container' style={{ color : "black" ,border: "1px solid black",marginBottom:"20px",padding:"10px"}}>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
              { errorState && <p style={{ color: "red" }} >{errorState}</p> }
                <Form.Label>User Name</Form.Label>
                <Form.Control style={{width: '300px '}}
                  type="text"
                  placeholder="User Name"
                  name="Username"
               style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
               value={usernameState}
               onChange={(e) => setUsernameState(e.target.value)}
                />
              </Form.Group>
              </Form.Row>
  
              <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control style={{width: '300px '}}
                  type="password"
                  placeholder="Password"
                  name="Password"
                  style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
                  value={passwordState}
                  onChange={(e) => setPasswordState(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
  
            <p> You don`t have account ?  <a href="/register"> Sign Up</a></p>
  
            <Button variant="outline-secondary" onClick={login} >
              Submit
            </Button>
  
          </Col>
        </Row>
      </Form>
      </>
    )
}
