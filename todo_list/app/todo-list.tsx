import { type } from "os";
import Todo from "./todo";

export type todoType={
    id: string,
    name: string,
    isDone: boolean,
}
const getTodos =async () => {
    let todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
}

export default async function TodoList(){
    const {todos} = await getTodos();
    console.log(todos);
    return(<div>
        <ul style={{listStyleType:"none",padding:0}}>
          { todos.map((t:todoType[])=> {
            return(
          <Todo prop={t} ></Todo>
            )
          })
          }
        </ul>
      </div>)
}