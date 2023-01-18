import AddNewTodo from "./add-new-todo"
import TodoList from "./todo-list";

export default async function page(){
  return (<div style={{
  paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px'}}> 
    <h1>Usman's TodoList</h1>
<AddNewTodo></AddNewTodo>
<TodoList></TodoList> 
  </div>);
}