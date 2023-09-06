
/**
 * A todo item is a checkbox, a name, and a button which deletes the todo item
 */
export default function TodoItem ({setAllTodos, id, name, isDone }){

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

    return (
        <li className="todoItem">
            <label>
                <input  type="checkbox"
                        checked={isDone}
                        onChange={(e)=> toggleTodoCheckbox( id, e.target.checked)}
                        className="todoCheckbox"/>
                {isDone? <label className="finishedTodo">{name}</label>: <label className="activeTodo">{name}</label>}
            </label>
            <button className="deleteTodo"
                    onClick={() => deleteTodoItem(id)}>
                    Delete
            </button>
        </li>  
    )

}