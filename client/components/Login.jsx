import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const Login = (props) => {
console.log('hello in login');
    function submitHandler(e) {
      e.preventDefault();
    const userData = {
      //this allows us to grab the value from user's input
      username: document.getElementById('username').value ,
      password: document.getElementById('password').value
    }

    Axios.post('/api/login', userData)
        .then((data) => {
            console.log('data', data)
            if(data.data.allowed) props.history.push('/allApplications');
            else {
                alert('invalid username or password');
            }
        })
        .catch((err) =>
            console.log('error'),
        );
    }
  

  return (
    <form onSubmit={submitHandler}>
        <h1>Log In</h1>
      <input type="text" id="username"></input>
      <input type="password" id="password"></input>
      <button type="submit">Login</button>
      <Link to='/'>
        <button>Don't have an account? Sign Up Here</button>
      </Link>
    </form>
  );
};

export default Login;
