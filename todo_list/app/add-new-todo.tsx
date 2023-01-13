'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addToDo(name,refresh) {
    await fetch("/api/todo/add",{
        method:"POST",
        body:JSON.stringify({name})
    });
    refresh();
}
export default function AddNewTodo(){
    const router = useRouter();
    let [name,setname]= useState("");

    return(
        <div>
<input type="text" onChange={(e)=> setname(e.target.value)} value={name}></input>

<button onClick={async()=>{
    await addToDo(name,router.refresh);
    setname("")
    }}>Add</button>
</div>
    )
}