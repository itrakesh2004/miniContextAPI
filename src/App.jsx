import React from 'react'
import UserContextProvider from './context/userContextprovider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
 return(
  <UserContextProvider>
  <h1>Context API</h1>
  <Login/>
  <Profile/>
  </UserContextProvider>
 )
}

export default App
