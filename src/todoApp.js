import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

export default function TodoApp () {
    
    /**
     * allTodos are a collection of todos that are objects in the form
     *      {id: str, name: str, isDone:boolean}
     */
    const [allTodos, setAllTodos] = useState([])
   
    return (
        <>
        <div className="todoApp">
            <TodoForm setAllTodos={setAllTodos}/>
            <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
        </div>
        </>
    )
}