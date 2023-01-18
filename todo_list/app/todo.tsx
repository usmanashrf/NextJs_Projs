'use client';
import { todoType } from "./todo-list";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react'

async function update(id, isDone, refresh){
    // await fetch('/api/todo/update',
    // {method:"POST",
    // body: JSON.stringify({id,isDone})});
  
    useEffect(() => {
    fetch('/api/todo/update',
    {method:"POST",
    body: JSON.stringify({id,isDone})})
    }, []);
    refresh();
}

async function deleteToDO(id, refersh) {
   // await fetch(`/api/todo/delete?id=${id}`,{method:"DELETE"});
   useEffect(() => {
    fetch(`/api/todo/delete?id=${id}`,
    {method:"DELETE"})
    }, []); 
   
   refersh();
}
export default function Todo(prop){
    const router = useRouter();
    return(
        <li key={prop.prop.id}style={{padding:"5px 0"}}>
            
                <input type={"checkbox"} 
                onChange={(e)=>update(prop.prop.id, e.target.checked, router.refresh)}
                checked={prop.prop.isDone}></input>

            <span>{prop.prop.name}</span>
            <button onClick={()=> deleteToDO(prop.prop.id,router.refresh)}>Delete</button>
            </li> 
    )
}