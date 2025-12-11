//This component must:
//Receive todos via props
//Display each task in a clean list
//If the list is empty, show:
//No tasks yet!



function TodoList({ todos }) {
    const isEmpty = todos.length === 0;
    let y = "This is empty list";
    if(isEmpty === false)  {
      y = " ";
    }
    return (
    <div>
        <h1>Todo List</h1>
        <p>{y}</p>
        <li> 
        <ul>{todos}</ul>
        </li>
    </div>
    );
}

export default TodoList;