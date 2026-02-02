import { useState } from 'react'
import React from 'react';
import Todoitem from './assets/Todoitem';
import './App.css'


function App() {
  const [todos,settodos]=useState([])
  const [input,setinput]=useState("");
  const addtodo=()=>{
    
    if(input.trim()=="")return;
    settodos([...todos,input])
    setinput("")
    
  }
  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>TODO LIST</h1>
      <input style={{outline:"none",padding:"10px",borderRadius:"5px"}} type="text" placeholder='ENTER A TASK' onChange={(e)=>setinput(e.target.value)}/>
      <button onClick={addtodo} style={{marginLeft:"10px"}}>Add</button>
      <div style={{marginTop:"30px" }}>
        {todos.map((val,index)=>{return <Todoitem key={index} task={val} />
})}
      </div>
    </div>
  )
}

export default App
