import {  useRef, useState,useEffect } from "react";
import React from 'react'

export const Stopwatch = () => {
  const[time,setTime]=useState(0);
  const[isrunning,setIsRunning]=useState(false);
  const timeRef=useRef(null);
  const seconds=time%60;
  const minute=Math.floor((time/60)%60);
  const hour=Math.floor(time/3600);
  //
  const formatedseconds=String(seconds).padStart(2,"0");
  const formatedminutes=String(minute).padStart(2,"0");
  const formatedhour=String(hour).padStart(2,"0");
  useEffect(() => {
    if(isrunning){
       
        timeRef.current=setInterval(()=>{
            setTime((previoustime)=>previoustime+1)
        },1000)
    }
    return ()=>{
        clearInterval(timeRef.current)
        // timeRef.current=null;
    }
}, [isrunning]);
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"200px"}}>
    <div style={{height:"300px",width:"300px",border:"5px solid black",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <h1 style={{marginTop:"-20px"}}>STOP WATCH</h1>
    <div style={{height:"20px",width:"150px",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"}}>{formatedhour}:{formatedminutes}:{formatedseconds}</div>
    <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
    <button onClick={()=>{
        //  if(timeRef.current!== null){
        //         return;
        //  }
       setIsRunning(true);
    }}>
        Start
    </button>
    <button onClick={()=>{
        
        setIsRunning(false);
    }}>Stop</button>

    <button onClick={()=>{
        setTime(0);
        setIsRunning(false);
    }}>Reset</button>
    </div>
    
    </div>
    </div>
  )
}
