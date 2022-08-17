export const Form = ({ setInputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form>
            <input type="text" onChange={inputTextHandler} className="todo-input" />
            <button className="todo-button" onClick={submitHandler} type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}