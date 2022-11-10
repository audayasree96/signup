
import React,{useState} from "react"
import { useNavigate } from "react-router-dom";
import './Page2.css';
import Form from "./Form";
import './App.css'
const Page2=()=>{
    let reg_mail=new RegExp('^[a-z 0-9]+@[a-z]+\\.[a-z]{2,3}$');
	let reg_pass=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
    const direct=useNavigate();
    const [data,setData]=useState({   
		
		username:{value:'',isValid:false,type:''},
		password:{value:'',isValid:false,type:''},
        email:{value:'',isValid:false,type:''},
		
	})
    const buttonallow=()=>{
       
        if(password.isValid && email.isValid)
		{
			return false;
		}
		else
		{
   
			return true;
		}

    }
	const {username,password,email}=data;
	const changeHandler=(name,val,err,type)=>{
	
			console.log("name:-"+name);
			console.log("value:-"+val);
			//console.log("error:-"+err);
			//console.log("type:-"+type);
            console.log("isvalid:-"+email.isValid);
            console.log("isvalid:-"+password.isValid);

			setData({
				...data,
				[name]:{
					...data.name,isValid:err,value:val,type:type
				}
			});			
	}
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Login Button Clicked");
        console.log(localStorage.getItem("username"));
        console.log(data.username.value);
        console.log(localStorage.getItem("password"));
        console.log(data.password.value);
        
        if(localStorage.getItem("email")==data.email.value && localStorage.getItem("password")==data.password.value)
        {
            console.log("valid");
            direct("/page3/?username"+data.username.value);
        
         
        }
        else
        {
            console.log("Invalid");
            alert("Email id or password is incorrect");
        }
       
    }
    return(
        <div className="MainScreen" align="center">
            <div align="center" className="FetchData">
            <form onSubmit={submitHandler} method="post">
                <div className="input-container-Mail">
                    <label ClassName="label1">email</label><br></br>
                    <Form type="email" name="email" onSubmit={changeHandler}   placeholder="Enter email" value={email.value}  id="mail" regx={reg_mail} ></Form>
				</div>
                <div className="input-container-password">
                    <label ClassName="label1">Password</label><br></br>
                    <Form type="password" name="password" onSubmit={changeHandler}   placeholder="Enter Password" value={password.value}  id="pass" regx={reg_pass} ></Form>
				</div><br></br>
                <div>
                    <button type="submit" disabled={buttonallow()}>sign in</button>
                </div>
                

            </form>
            </div>
        </div>
        
                
    )
}
export default Page2;