import { useState } from "react"
import TodoForm from "./TodoForm"

export default function TodoApp () {
    
    const [allTodos, setAllTodos] = useState([])

    const toggleTodoCheckbox = (id, currentCheckState) =>{
        setAllTodos( (currentTodos) => {
            //return a new collection of the current todo list (where the one with the id is modified)
            return currentTodos.map( (todo) => {
                if (todo.id === id) {
                    const newTodo = {id: todo.id, name: todo.name, isDone: currentCheckState}
                    return newTodo
                }
                return todo
            })
        })
    }

    const deleteTodoItem = (idToDelete) => {
        setAllTodos( currentTodos => {
            return currentTodos.filter( todo => todo.id !== idToDelete)
        })
    }

    /**
     * A todo list item is a component with:
     *      A Checkbox (keyed on their id)
     *      The name of the todo item (e.g. wash floor)
     *      A button to delete the item
     */
    const generateTodoListItems = () => {
        return allTodos.map( (todoItem) => {
            return(
              <li key={todoItem.id}>
                <label>
                    <input  type="checkbox"
                            checked={todoItem.isDone}
                            onChange={(e)=>toggleTodoCheckbox( todoItem.id, e.target.checked)}/>
                    {todoItem.isDone? <s>{todoItem.name}</s>:todoItem.name}
                </label>
                <button className="deleteTodo"
                        onClick={() => deleteTodoItem(todoItem.id)}>Delete</button>
              </li>  
            )
        })
    }


   
    return (
        <>
        <div className="todoApp">
            <TodoForm setAllTodos={setAllTodos}/>
            <ul>
                {generateTodoListItems()}
            </ul>
        </div>
        </>
    )
}