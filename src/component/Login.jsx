import React ,{useState,useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [userName,setuserName]=useState('');
const [password,setpassword]=useState('');

const {setUser}=useContext(UserContext);

 const handleSubmit =(e) => {
    e.preventDefault()
    setUser({userName,password})
 }
  return (
    <div>
        <h2>login</h2>
        <input type='text' placeholder='username' value={userName} onChange={(e) => setuserName(e.target.value)}/>
        <input type='number' placeholder='password'value={password} onChange={(e) => setpassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login