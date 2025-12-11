//Contain an input box for task text
// Contain a button labeled “Add Task”
//On click
// Add the new task to the parent state using setTodos
// Clear the input after submission

import { useState } from 'react';

function AddTodo({ setTodos }) {
    const [userInput, setUserInput] = useState('');

    const AddTask = () => {
            setTodos((prevTodos) => [...prevTodos, userInput]);
            setUserInput('');
    };

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                placeholder="Enter task"
            />
            <button onClick={AddTask}>Add Task</button>
        </div>
    );
}

export default AddTodo;