import React from 'react';
import ToDoItem from './ToDoItem'

function ToDoList() {
    return (
        <div className="todo-list">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}

export default ToDoList;