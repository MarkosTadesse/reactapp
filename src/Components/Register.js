import React from 'react';
import { useState } from "react";
import Axios from 'axios'

import './styles.css'
export const Register = () =>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const [loginUser, setLoginUser] = useState("");
    const [LoginPass, setLoginPass] = useState("");

    const register = () =>{
        Axios.post("http://localhost:4000/register", {"username":username,"password":password,"email":email})
    }
    const login = () =>{
        console.log({"username":loginUser,"password":LoginPass})
        Axios.post("http://localhost:4000/login", {"username":loginUser,"password":LoginPass})
        .then(response => console.log(response))
    }
    return(
        <div className="container">

            <div className="login">
                <h1>login</h1>
                <form>
                    <label for="Username"><b>Username</b></label>
                    <input type="text"
                    onChange= {(e) =>{
                        setLoginUser(e.target.value)
                        
                    }}
                    placeholder="Enter Username"
                    name="username" required/>
                    <br/>
                    <label for="Password"><b>Password</b></label>
                    <input type="password"
                    onChange= {(e) =>{
                        setLoginPass(e.target.value)
                    }}
                    placeholder="Enter Password" 
                    name="password" required/>
                                        <br/>
                    <button type="button" onClick={login}>Login</button>
                </form>


            </div>

            <div class="register">
                <h1>register</h1>
                <form>
                    <label for="Username"><b>Username</b></label>
                    <input type="text"
                    onChange= {(e) =>{
                        setUsername(e.target.value)
                    }}
                    placeholder="Enter Username"
                    name="username" required/>
                    <br/>
                    <label for="Password"><b>Password</b></label>
                    <input type="password"
                    onChange= {(e) =>{
                        setPassword(e.target.value)
                    }}
                    placeholder="Enter Password" 
                    name="password" required/>
                    <br/>
                    <label for="Email"><b> Email </b></label>
                    <input type="email"
                    onChange= {(e) =>{
                        setEmail(e.target.value)
                    }}
                    placeholder="Enter Email"
                    name="email" required/>
                                        <br/>
                    <button type="button" onClick={register}>Register</button>
                </form>
            </div>
        </div>
    )
}