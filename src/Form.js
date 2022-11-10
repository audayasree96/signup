import React, { useState } from "react";
import './Form.css'
const Form =(props)=>{

    //const[name,setName]=useState("");
    let isval=false;
    const [errorField,setError]=useState(false);
    let handleChange=(e)=>{
       
        //setName(e.target.value);
        if(props.regx.test(e.target.value))
        {
            setError(true);
            isval=true;
        }
        else
        {
            setError(false);
            isval=false;
        }
        props.onSubmit(props.name,e.target.value,isval,props.type);
       
    }
    return(
        <>
            <input type={props.type} value={props.value} onChange={handleChange} placeholder={props.placeholder} id={props.id}></input> 
            {errorField ?<p></p>:<p>Enter Valid {props.name}format</p>}
        </>
    );
}

export default Form;