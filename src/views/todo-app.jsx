import { useState } from "react";
import { useEffect } from "react";
import { Form } from "../cmps/form";
import { TodoList } from "../cmps/todo-list";


const TodoApp = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        handlerFilter()
        saveLocalTodos()
    }, [todos, status])

    const handlerFilter = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }

    const saveLocalTodos = () => {
        if (todos.length) localStorage.setItem("todos", JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            console.log(todoLocal)
            setTodos(todoLocal)
        }
    }

    return (
        <main className="main-container">
            <div className="main-left"></div>
            <div className="main-main">
                <h1 className="title">Todo List</h1>
                <Form
                    setInputText={setInputText}
                    setTodos={setTodos}
                    todos={todos}
                    inputText={inputText}
                    setStatus={setStatus} />
                <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
            </div>
            <div className="main-right"></div>
        </main>
    )
}

export default TodoApp;