import React from 'react'
import logo from '../images/logo.jpg'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const navigation = useNavigate();
    
    const [ username , setUsername ] = useState('');
    const [password , setPassword ] = useState('');

    // async function submit (e) {
    //     e.preventDefault();

    //     navigation('/profile');

    //     // try{
    //     //     await axios.post('http://localhost:3000/', {
    //     //         username,password
    //     //     })
    //     //     .then(res => {
    //     //         if(res.data==='exist') {
    //     //             navigation('/profile',{state: {id:username}});
    //     //         }
    //     //         else if(res.data==='notexist') {
    //     //             alert('User does not exist');
    //     //         }
    //     //     })
    //     //     .catch(e=> {
    //     //         alert('wrong details');
    //     //         console.log(e);
    //     //     })
    //     // }
    //     // catch (e) {
    //     //     console.log(e.message);
    //     // }
    // }

    // const navigation = useNavigate();

  const [user , setUser] = useState({
    username : "",
    password: ""
  })

  const handlechange = (e) => {
    // console.log(e.target);
    const { name , value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name] : value
    })
  }

  const login = () => {
    axios.post("http://localhost:8000/", user )
    .then( (res) => {
      // alert(res.data.name);
      // alert(res.data.message);
      if(res.data.message==='user registered')
      {
        console.log(user.name);
        navigation('/profile', {state : {id : user.username}});
      }
      else if(res.data.message==='user not registered')
      {
        alert("Please enter with valid id");
        navigation('/');
      }else if(res.data.message==='wrong password')
      {
        alert("Please enter with valid password");
        navigation('/');
      }
      // const msg = res.data.name;
      // navigation('/profile', {state : { id : msg }});
    })
    .catch((err) => {
      alert(err);
    });
  }
    
    return (
    <>
    <div class="container">
        <div class="box1">
            <div class="n">
                <img src={logo} alt='Error loading' class='image2'/>
                <h1 id="alcheringa">Alcheringa <span id="side">Connect</span></h1>
            </div>
            <p class="content">
                Welcome to the Official page of <br/><br/>Alcheringa'23 <br/><br/> Please Login to proceed further...
            </p>
        </div>
        <div class="box2">
            <div class="sign">
                <p id="login">Login</p>
                <span class="fle">
                    <span class="acc">Don't have an account?<span class="dont" onClick={() => navigation('/register')}><u>REGISTER HERE</u></span></span>
                    {/* <span class="dont" onClick={() => navigation('/register')}><u>REGISTER HERE</u></span> */}
                </span>
            </div>
            <div class="relative">
                <div class="username">Username</div>
                <input type="text" name="username" value={user.username} onChange={ handlechange } placeholder='username' class="user"/>
                <div class="password">Password</div>
                <input type="text" name="password" value={user.password} onChange={ handlechange } placeholder='password' class="pass"/>
                <button class="btn" onClick={ login }>Login</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login;
