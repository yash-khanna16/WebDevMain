import React, { useState } from 'react'
import Todoinput from '../TodoInput/Todoinput'
import Todolist from '../TodoList/Todolist'
import { v4 as uuidv4 } from 'uuid';



const Todo = () => {
    let initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialTodos)

    const updateTodo = (newTask) => {
        console.log(todos);
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        newtodos.unshift({ name: newTask, id: uuidv4(), checked: false });
        localStorage.setItem('todos', JSON.stringify(newtodos));

        setTodos(
            newtodos
        )
    }

    const updateCheckBox = (id) => {
        setTodos((prevState) => 
            prevState.map((todo) => {
                return todo.id == id ?
                    { name: todo.name, id: todo.id, checked: !todo.checked } :
                    todo
            })
        )
    }

    return (
        <>
            <Todoinput updateTodo={updateTodo} />
            <Todolist todos={todos} updateCheckBox={updateCheckBox}/>
        </>
    )
}

export default Todo
