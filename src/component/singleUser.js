import React from 'react'
import {UserDisplay} from './UserDisplay'
export const  SingleUser=(user) =>{
    
    const allUser=user.user;
    return (
        <div>
           {allUser.map((user)=>{
               return <UserDisplay user={user}/>
           })}
        </div>
    )
}