import TodoItem from "./TodoItem"

/**
 * The todo list is a nonbulleted list of todo items
 */

export default function TodoList({allTodos, setAllTodos}) {

    /**
     * A todo list item is a component with:
     *      A Checkbox (keyed on their id)
     *      The name of the todo item (e.g. wash floor)
     *      A button to delete the item
     */
        const generateTodoListItems = () => {
            return allTodos.map( (curTodo) => {
                return(
                  <TodoItem setAllTodos={setAllTodos}
                            id={curTodo.id}
                            name={curTodo.name}
                            isDone={curTodo.isDone}
                            key={curTodo.id}/>
                )
            })
        }

    return (
        <>
            <ul className="nobullets">
                {generateTodoListItems()}
            </ul>
        </>
    )
}