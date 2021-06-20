import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';



export default function Chat() {
    return (
        <div>
            <div style={{ height: "550px", position: "relative" }} >
                <ul style={{ position: "absolute", bottom: " 0px", listStyleType: "none" }}>
                    <li className="receive-chat">test</li>
                    <li >Hi</li>
                    <li>last</li>
                    <li>last</li>
                    <li>last</li>
                    <li className="receive-chat">last</li>
                </ul>
            </div>
            <InputGroup className="mb-3">
                <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2">
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}
