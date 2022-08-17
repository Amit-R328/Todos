import { useState } from "react";
import { useEffect } from "react";
import { Form } from "../cmps/form";
import { TodoList } from "../cmps/todo-list";


const TodoApp = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    useEffect(() => {

    }, [])




    return (
        <main className="main-container">
            <div className="main-left">left</div>
            <div className="main-main">
                <Form setInputText={setInputText} />
                <TodoList />
            </div>
            <div className="main-right">right</div>
        </main>
    )
}

export default TodoApp;