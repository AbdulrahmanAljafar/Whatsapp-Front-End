import React from 'react'
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

export default function SignUp() {
    return (
        <div>
            <Form className="mt-5" className='container' style={{ color : "black" ,border: "1px solid black",marginBottom:"20px",padding:"10px"}}>
                <Row className="justify-content-center mt-5 ">
                    <Col md={8}>
                        <Form.Row>
                            <Col md={12}>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    placeholder="Full name"
                                    name="name"
                                    style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
                                    required />
                            </Col>
                        </Form.Row>
                        <Form.Row >
                            <Col md={12}>
                                <Form.Group >
                                    <Form.Label >User Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="User Name"
                                        name="Username"
                                        style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
                                        required />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col md={12}>
                                <Form.Group controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="Password"
                                        style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
                                        required />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                       
                        <Form.Row >
                           
                            <Col md={6}>
                                
                                <Form.Group controlId="formGridPassword"  >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="Confirm Password"
                                        style={{textAlign:"center",width:"400px",marginLeft:"160px"}}
                                        required />
                                </Form.Group>
                               
                            </Col>
                        </Form.Row>
                        


                        <p>You alredy have an account ?  <a href="/login"> log in</a></p>

                        <Button
                            variant="outline-secondary"
                            type="submit"

                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
