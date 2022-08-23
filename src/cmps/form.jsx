import { utilService } from "../services/util.service"

export const Form = ({ setInputText, inputText, setTodos, todos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        e.preventDefault()
        setTodos([...todos, { text: inputText, completed: false, date: Date.now(), dateToShow: date, time: time, id: utilService.makeId(5) }])
        setInputText('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" />
            <button className="todo-button" onClick={submitHandler} type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}