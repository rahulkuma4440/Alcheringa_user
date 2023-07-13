import React, { useState } from "react";
import axios from 'axios';
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  
  const navigation = useNavigate();

  const [user , setUser] = useState({
    name : "",
    username : "",
    password: ""
  })

  // const [ username , setUsername ] = useState('');
  //   const [password , setPassword ] = useState('');

    // async function submit (e) {
    //     e.preventDefault();
    //     // setUsername("");
    //     // setPassword("");

    //     // try{
    //     //     await axios.post('http://localhost:8000/register', {
    //     //         username, password
    //     //     })
    //     //     .then(res => {
    //     //       if(res.data==='exist') {
    //     //         alert('User already exists');
    //     //           // navigation('/profile',{state: {id:username}});
    //     //       }
    //     //       else if(res.data==='notexist') {
    //     //           // alert('User does not exist');
    //     //           navigation('/profile',{state: {id:username}});
    //     //       }
    //     //   })
    //     //   .catch(e=> {
    //     //       alert('wrong details');
    //     //       console.log(e);
    //     //   })
    //     // }
    //     // catch (e) {
    //     //     console.log(e);
    //     // }

    //     // navigation('/');

    // }
  
  const handlechange = (e) => {
    // console.log(e.target);
    const { name , value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name] : value
    })
  }

  const register = () => {
    const { name , username , password } = user;
    if( name && username && password )
    {
      // alert('valid input');
      axios.post("http://localhost:8000/register", user )
      .then( res => {
        alert(res.data.message)
        navigation('/');
      })
      .catch((error) => {
        alert(error);
        // console.log(error);
      });
    }
    else{
      alert("Invalid input");
    }
  }

  return (
    <div className="r0">
      <div className="r1">
        REGISTER HERE
      </div>
      <div className="r2">
        <div className="name">Enter your name</div>
        <input name="name" value={user.name} onChange={ handlechange } placeholder="Enter your name" className="inp"/>
        <div className="name">Enter your username</div>
        <input type="text" name="username" value={user.username} onChange={ handlechange } placeholder="Username" className="inp"/>
        <div className="name">Enter your password</div>
        <input type="password" name="password" value={user.password} onChange={ handlechange } placeholder="Password" className="inp"/>
        <button className="btn" onClick={ register }>Register</button>
      </div>
    </div>
    )
}

export default Register;
