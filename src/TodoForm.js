import { useState } from "react"

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
        <form onSubmit={handleFormSubmit}
                  autoComplete="off">
                <label htmlFor="todoItem">Enter New ToDo:</label>
                <input type="text"
                    id="todoItem"
                    placeholder="new todo item..."
                    onChange={ (e) => setTodoName(e.target.value) }
                    value={todoName}/>
                <button className="btnTodo"
                        disabled={todoName===""} >Add</button>
            </form>
        </>
    )
}