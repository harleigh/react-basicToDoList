import { useState } from "react"

/**
 * The foum adds a new todo into our array of all todos
 * 
 * fun bit: The add todo item is disabled if the field is blank or 
 *          only contains whitespace.
 */
export default function TodoForm ({setAllTodos}) {
    const [todoName, setTodoName] = useState("")

    const generateNewTodoItem = () => {
        return {id: crypto.randomUUID(),
                name: todoName,
                isDone: false}
    }

    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        setAllTodos( (curentTodos) => {
            return [ ...curentTodos,
                     generateNewTodoItem()]
        })//end set all todos

        setTodoName("")
    }


    return(
        <>
        <form onSubmit={handleFormSubmit} className="todoForm"
                  autoComplete="off">
                <label htmlFor="todoItem">Enter New Todo:</label>
                <input type="text"
                    id="todoItem"
                    placeholder="new todo item..."
                    onChange={ (e) => setTodoName(e.target.value) }
                    value={todoName}/>
                <button className="btnTodo"
                        disabled={todoName.trim()===""} >Add</button>
            </form>
        </>
    )
}