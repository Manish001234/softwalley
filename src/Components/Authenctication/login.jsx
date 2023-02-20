import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const [state,setState] = useState(false);
    const [hidden,setHidden] = useState("");
    const [username,setUsername] = useState("");   
    const [pasword,setPassword] = useState("");
    const fetchData = async () => {
        fetch("http://crm.softvalley.sveducrm.com/api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email : username,
                password : pasword,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
            
              let token = localStorage.setItem("Jwt_Token", data.access);
              console.log("fjgdhgdhd", token);
      
              if (data.access != undefined) {
                alert.success("Succesfully Login");
                navigate("/home");
               
               
              } else {
                alert.error("Please check your login credentials");
              }
            })
            .catch((err) => {
              console.log("ererororo", err);
            });
      }
useEffect(()=>{
    fetchData()
},[])
     

  return (
    <div style={{marginTop:"100px"}}>
       <div style={{margin:"auto",textAlign:"center"}}>
      <br />
      <h1>Login</h1>
      <TextField name="email" onChange={(e)=>setUsername(e.target.value)} style={{width:"30%",margin:"25px 0"}} id="demo-helper-text-misaligned-no-helper" label="Email" placeholder='Enter Email' />
      <br />
      <TextField name="password" onChange={(e)=>setPassword(e.target.value)} type="password"  style={{width:"30%"}} id="demo-helper-text-misaligned-no-helper" label="Password" placeholder='Enter Password' />
      <br />
      {state ? <p style={{color:"red"}}>{hidden}</p> : null}
      <br />
      <Button    onClick={(e) => {
                  e.preventDefault();
                  fetchData();
                }} style={{width:"30%",height:"50px"}} variant="contained">LOGIN</Button>
      <br />
      
    </div>
    </div>
  )
}

export default Login