import { type } from "os";
import Todo from "./todo";
import { useState, useEffect } from 'react'

export type todoType={
    id: string,
    name: string,
    isDone: boolean,
}
const getTodos =async () => {
   // let todos = await fetch("http://localhost:3001/api/todo/list");
    //return todos.json();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/todo/list')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    return data;
}
//https://todo-api-proj.vercel.app/api/todo/list
export default async function TodoList(){
    const {todos} = await getTodos();
    return(<div>
        <ul style={{listStyleType:"none",padding:0}}>
          { todos.map((t)=> {
            return(
          <Todo prop={t} ></Todo>
            )
          })
          }
        </ul>
      </div>)
}