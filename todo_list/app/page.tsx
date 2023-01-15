import { url } from "inspector";
import AddNewTodo from "./add-new-todo"
import TodoList from "./todo-list";
import bg from "./blk.png";

export default async function page(){
  return (<div style={{backgroundImage: `url(${bg.src})`,
  paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px'}}> 
    <h1>Usman's TodoList</h1>
<AddNewTodo></AddNewTodo>
{/* @ts-expect-error Server Component */}
<TodoList></TodoList> 
  </div>);
}