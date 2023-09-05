import { useState, useRef } from "react"

export default function TodoApp () {
    const newTodoRef = useRef()


    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("New todo name is: ", newTodoRef.current.value)
        
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todoItem">Enter New ToDo:</label>
            <input type="text"
                   id="todoItem"
                   placeholder="new todo item..."
                   ref={newTodoRef}/>
            <button className="btnTodo">Add</button>
        </form>
        </>
    )
}