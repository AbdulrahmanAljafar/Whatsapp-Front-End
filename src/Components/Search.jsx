import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';


import Users  from './Users';

export default function Search() {
    return (
        <div>
             <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />

            </InputGroup>
            <Users />
            
        </div>
    )
}
