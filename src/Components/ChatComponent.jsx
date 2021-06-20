import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';



export default function Chat() {
    return (
        <div className="chat">
            <div style={{ height: "550px", position: "relative" }} >
                <ul style={{ position: "absolute", bottom: " 0px", listStyleType: "none" }}>
                    <li className="sender">test</li>
                    <li className="receive-chat" >Hi</li>
                    <li className="sender"> last</li>
                    <li className="sender">last</li>
                    <li className="sender">last</li>
                    <li className="receive-chat">last</li>
                </ul>
            </div>
            <InputGroup className="mb-3">
                <FormControl style={{backgroundColor:"#1f2428" ,Color:"white"}} placeholder="Type a message" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <Button variant="outline-secondary" id="button-addon2"  className="buttonChat">
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}
