import { Todo } from "./todo"

export const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <section className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />)}
            </ul>
        </section>
    )
}