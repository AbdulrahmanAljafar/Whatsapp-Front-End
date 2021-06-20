import React from 'react'
import { Form, Button, Col, Row,Alert } from "react-bootstrap";

export default function Login() {
    return (
        <>
        <hr/>
        <Form className="mt-5" className='container' style={{ color : "black" ,border: "1px solid black",marginBottom:"20px",padding:"10px"}}>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control style={{width: '300px '}}
                  type="text"
                  placeholder="User Name"
                  name="Username"
               style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
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
                />
              </Form.Group>
            </Form.Row>
  
            <p> You don`t have account ?  <a href="/register"> Sign Up</a></p>
  
            <Button variant="outline-secondary" type="submit" >
              Submit
            </Button>
  
          </Col>
        </Row>
      </Form>
      </>
    )
}
