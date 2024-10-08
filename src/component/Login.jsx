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
    <div style={{border:"2px solid black", display:"flex", flexDirection:"column", alignItems:"center",gap:10 }}>
        <h2>login</h2>
        <input type='text' placeholder='username' value={userName} onChange={(e) => setuserName(e.target.value)}/>
        <input type='number' placeholder='password'value={password} onChange={(e) => setpassword(e.target.value)}/>
        <button onClick={handleSubmit} style={{border:"2px solid red", color:'gold', backgroundColor:"black"}}>Submit</button>
    </div>
  )
}

export default Login