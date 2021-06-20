import React,{useState} from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';


import Users from './Users';


export default function Search() {
  

    const onChangeInput = (event) => {
        console.log(event.target.value)
        
      };

 

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => onChangeInput(e)} />
            </InputGroup>
               <ul id="ul-Search">
      
               </ul>
            <Users />

        </div>
    )
}
