import React, { useState } from 'react';

function User() {
    const[user,updateuser]=useState([
        {Name: "Arun", Age :"24"},
        {Name: "Yash", Age :"23"},
        {Name: "Mayur", Age :"23"}
    ])
    return(
         <div>
            {
                user.map((item,i)=>
                <div key={i}>{item.Name} {item.Age}
                    
                </div>
                )
            }
         </div>
    )
}
export default User;