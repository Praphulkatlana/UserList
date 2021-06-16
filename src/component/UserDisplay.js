import React from 'react'

export const UserDisplay = (user) => {
    
    return (
        <div className="centerContainer">
            <div class="ui card">
                <div class="image">
                    <img src={user.user.avatar}></img>
  
                    <div class="content">
                        <a class="header"> {user.user.first_name} {user.user.last_name}</a>
                        <div class="meta">
                            <span class="date">{user.user.email}</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            </div>
            )
}

