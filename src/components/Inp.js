import React, { useState } from "react";

const Inp=()=>{
    const [para,setPara]=useState("");
    function callAbc(event){
        setPara(event.target.value);
    }
    return (<div>
        <div><p>Enter your name:</p></div>
        <div><input type="text"  onChange={callAbc} placeholder="Enter your name"></input></div>
        <div><p>  Hello {para}!</p></div>
    </div>)
} 

export default Inp;