import React,{useContext} from "react";
import UserContext from "../context/UserContext";


function Profile() {
    const {user} =useContext(UserContext)
 
        if(!user) return <div style={{color:"red"}}>plese login</div>
        return <div style={{color:"red"}}> Welcome{user.userName}</div>
}

export default Profile