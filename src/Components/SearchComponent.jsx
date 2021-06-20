import React,{useState} from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import CardSearchHelp from './CardSearchHelpComponent'


import Users from './UsersComponent';



export default function Search() {
    const [Search,setSearch]=useState('')

    const [searchHelp,setsearchHelp]=useState(["test","test1","test2","test3","test4","Abdulrahman"])

    const onChangeInput = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
      };


      const allsearchHelp = searchHelp.filter((val)=>{
          
        if(Search == ""){
            return null
        }
        else if(val.toLowerCase().includes(Search.toLowerCase())){
            return val
        }
    }).map((searchHelp, i) => {
        return <CardSearchHelp key={i} searchHelp= {searchHelp}  />


    });

 

    return (
        <div style={{position:"relative"}}>
            <InputGroup className="mb-3">
                <FormControl placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => onChangeInput(e)} />
            </InputGroup>
                <ul style={{position:"fixed",backgroundColor:"white",width:"400px",zIndex:"2"}}>
                {allsearchHelp}
                </ul>
            <Users />

        </div>
    )
}
