import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useEffect } from "react"

export default function TodoApp () {
    
    /**
     * allTodos are a collection of todos that are objects in the form
     *      {id: str, name: str, isDone:boolean}
     */
    const [allTodos, setAllTodos] = useState( () =>{
        const localVals = localStorage.getItem("ACTIVE_TODOS")
        if( localVals===null || localVals===undefined){
            return []
        }
        return JSON.parse(localVals)    //puts into an array of todo objects
    })

    /**
     * So our data will persist when the refresh key is struck
     */
    useEffect( () => {
        localStorage.setItem("ACTIVE_TODOS", JSON.stringify(allTodos))
    }, [allTodos])
   
    return (
        <>
        <div className="todoApp">
            <TodoForm setAllTodos={setAllTodos}/>
            <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
        </div>
        </>
    )
}