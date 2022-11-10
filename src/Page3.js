import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
const Page3 = () => {
  const direct=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("Logout button clicked ");
    direct("/page2/");
    
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <h1>WELCOME {localStorage.getItem("username")}</h1>
          <br />
          <br/>
          <button type="submit">Logout</button>
        </div>
          
      </form>
     
    </div>
  )
}

export default Page3
