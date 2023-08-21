import React, { useState } from 'react'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure} from '../../redux/userSlice.js';

import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signin', {username, password});
      dispatch(loginSuccess(res.data));
      navigate("/");
      //console.log("res", res.data);
    } catch (err) {
      dispatch(loginFailure());
      //console.log(err);
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signup', {username, email, password});
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  }

  return (
    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className='text-3xl font-bold text-center'>Sign in to Twitter!</h2>
      <input onChange={(e) => setUsername(e.target.value)} type="text" className="text-xl py-2 rounded-full px-4" placeholder="Username"/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" className="text-xl py-2 rounded-full px-4" placeholder="Password"/>
      <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" onClick={handleLogin}>Sign In</button>
      <p className='text-center text-xl'>Don't have an account</p>
      <input onChange={(e) => setUsername(e.target.value)} type="text" className="text-xl py-2 rounded-full px-4" placeholder="Username"/>
      <input onChange={(e) => setEmail(e.target.value)} type="email" className="text-xl py-2 rounded-full px-4" placeholder="Email" required/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" className="text-xl py-2 rounded-full px-4" placeholder="Password"/>
      <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" type="submit" onClick={handleSignup}></button>
    </form>
  )
}

export default Signin;