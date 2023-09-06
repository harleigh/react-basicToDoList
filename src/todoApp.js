import { useState } from "react"

export default function TodoApp () {
    const [todoName, setTodoName] = useState("")
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
                <button className="deleteTodo">Delete</button>
              </li>  
            )
        })
    }

    const generateNewTodoItem = ()=> {
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

   
    return (
        <>
        <div className="todoApp">
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
            <ul>
                {generateTodoListItems()}
            </ul>
        </div>
        </>
    )
}