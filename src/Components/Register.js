import React from 'react';
import { useState } from "react";
import Axios from 'axios'

import './styles.css'
export const Register = () =>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const register = () =>{
        Axios.post("http://localhost:4000/register", {username:username,password:password,email:email})
    }

    return(
        <div class="register">
            <form>
                <label for="Username"><b>Username</b></label>
                <input type="text"
                onChange= {(e) =>{
                    setUsername(e.target.value)
                }}
                placeholder="Enter Username"
                name="username" required/>

                <label for="Password"><b>Password</b></label>
                <input type="password"
                onChange= {(e) =>{
                    setPassword(e.target.value)
                }}
                placeholder="Enter Password" 
                name="password" required/>

                <label for="Email"><b> Email </b></label>
                <input type="email"
                onChange= {(e) =>{
                    setEmail(e.target.value)
                }}
                placeholder="Enter Email"
                name="email" required/>
                <button type="submit" onClick={register }>Login</button>
            </form>
        </div>
    )
}