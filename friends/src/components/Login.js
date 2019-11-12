import React, {useState} from 'react';
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value 
    })
  }

  console.log('new user', user)

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user )
      .then(response => {
        console.log("response", response.data.payload);
        localStorage.setItem("token", response.data.payload );
        console.log('localStorage.getItem("token")',localStorage.getItem("token"))
      })
    
    console.log('user', user)
  }
  // "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ"

  return (
    <div>
      <h1>Hello from login</h1>
      <form onSubmit={handleLogin} >
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} className=""/>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} className=""/>
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
