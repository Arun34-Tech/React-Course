import React, { useState } from "react";

function Body() {
    const[val,setval]=useState("Arun")
    const test=(e)=>{
        console.warn("warn",e.target.value);
        setval(e.target.value);
    }
    return(
        <div>
            <h1>hello word</h1>
            <input type="text" value={val} onChange={test}></input>
            <button onClick={()=>alert(val)}>Click IT</button>
        </div>
    )
}

export default Body;