import React,{useState} from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import CardSearchHelp from './CardSearchHelpComponent'


import Users from './UsersComponent';



export default function Search() {
    const [Search,setSearch]=useState('')

    const [searchHelp,setsearchHelp]=useState(["test","test1","test2","test3","test4","Abdulrahman"])

    const onChangeInput = (event) => {
        console.log(event)
        console.log(event.target.value)
        if(event.key == "Enter"){
            setSearch(event.target.value);
        } else if(event.target.value.trim() == ""){
            setSearch('')
        }
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
        <div style={{position:"relative",backgroundColor:"#131c21" }} className="search">
            <InputGroup >
                <FormControl style={{backgroundColor:"#1f2428" ,Color:"white"}}  placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyUp={(e) => onChangeInput(e)}  />
            </InputGroup>
                <div style={{position:"absolute",backgroundColor:"#1f2428",width:"100%",zIndex:"2"}}>
                {allsearchHelp}
                </div>
            <Users />
        
        </div>
    )
}
