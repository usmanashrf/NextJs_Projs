import { type } from "os";
import Todo from "./todo";

export type todoType={
    id: string,
    name: string,
    isDone: boolean,
}
const getTodos =async () => {
    let todos = await fetch("https://todo-api-proj.vercel.app/api/todo/list");
    return todos.json();
}

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