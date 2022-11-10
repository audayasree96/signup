import React,{useState} from "react"
import Form from "./Form"
import { useNavigate } from 'react-router-dom';
export default function Right()
{
	const direct=useNavigate();
	let reg_name=new RegExp('^[A-Za-z]+\\s?[a-zA-Z]*$');
	let reg_pass=new RegExp('(^[A-Z]*[A-Z a-z 0-9]*[^A-z a-z 0-9]*[A-Z a-z 0-9]*[A-z a-z 0-9]*[A-Z]+[A-Z a-z 0-9]*[^A-z a-z 0-9]*[^A-z a-z 0-9]+[A-Z a-z 0-9]*[0-9]*[^A-Z a-z 0-9]*[A-Z a-z 0-9]*)$');
	let reg_mail=new RegExp('^[a-z 0-9]+@[a-z]+\\.[a-z]{2,3}$');
	const [data,setData]=useState({   
		
		username:{value:'',isValid:false,type:''},
		password:{value:'',isValid:false,type:''},
		confirmpassword:{value:'',isValid:false,type:''},
		email:{value:'',isValid:false,type:''},
		
		

	})
	const {username,password,confirmpassword,email,checkbox}=data;
	const changeHandler=(name,val,err,type)=>{
	
			console.log("name:-"+name);
			console.log("value:-"+val);
			console.log("error:-"+err);
			console.log("type:-"+type);
			setData({
				...data,
				[name]:{
					...data.name,isValid:err,value:val,type:type
				}
			});			
	}
	
	const buttonallow=()=>{

		if(password.isValid && email.isValid && username.isValid)
		{
			return false;
			
		}
		else
		{
			return true;
		}

	}

	const handleClick=()=>{
		
		
		if(password.type=="password")
		{
			document.getElementById('pass').type="text";
			setData({
				...data,
				[password]:{
					...data.password,type:"text",
				}
				});
			
		}
		else if(password.type=="text")
		{
			document.getElementById('pass').type="password";
			setData({
				...data,
				[password]:{
					...data.password,type:"password",
				}
				});
		}
	}
	const submitHandler=e=>{
		e.preventDefault();
		
		console.log(data.username.value);
		console.log(data.username.isValid);
		console.log(data.password.value);
		console.log(data.password.isValid);
		console.log(data.email.value);
		console.log(data.email.isValid);
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
		localStorage.setItem("email",email.value);
		if(data.password.value==data.confirmpassword.value)
		{
			direct("/page2/?username"+data.username.value);
		}
		else
		{
			alert("Please Confirm the password Correctly");
		}

		
	}
    return(
        <div className="Right">
          <form onSubmit={submitHandler}  method="post">
                <section className="copy">
                    <h2>Sign Up</h2>
                </section>

               
                <div class="input-container_name">
                    <h3 ClassName="label2">UserName</h3><br></br>
                    <Form type="text" name="username" onSubmit={changeHandler}   placeholder="Enter Name" value={username.value}  id="name1" regx={reg_name} ></Form>
				</div>
					
                <div className="input-container-password">
                    <h3 ClassName="label2">Password</h3><br></br>
                    <Form type="password" name="password" onSubmit={changeHandler}   placeholder="Enter Password" value={password.value}  id="pass" regx={reg_pass} ></Form>
					<img id="img" src="https://d2ivesio5kogrp.cloudfront.net/static/yuppedu/images/hide.png" alt="eye-Symbol" onClick={handleClick}></img>
				</div>

				<div className="input-container-password">
                    <h3 ClassName="label2">Confirm Password</h3><br></br>
                    <Form type="password" name="confirmpassword" onSubmit={changeHandler}   placeholder="Confirm Password" value={confirmpassword.value}  id="cpass" regx={reg_pass} ></Form>
					
				</div>
					
                <div className="input-container-Mail">
                    <h3 ClassName="label2">email</h3><br></br>
                    <Form type="email" name="email" onSubmit={changeHandler}   placeholder="Enter email" value={email.value}  id="mail" regx={reg_mail} ></Form>
				</div>

                <div className="input-container-check">
                    <input type="checkbox" name="checkbox" value={checkbox} onChange={changeHandler}></input><label>I agree to get the terms and conditions</label>
                </div>

                <div className="input-container-buttion">
                    <button type="submit" id="btn-submit" disabled={buttonallow()}>Sign up</button>
                </div>
               
            </form>

        </div>
    );
}

