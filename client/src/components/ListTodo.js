import React, { Fragment, useEffect, useState } from 'react'
import { EditTodo } from './EditTodo'
export const ListTodo = () => {
    const [todos, setTodos] = useState([])


    //delete todo
    const deleteTodo = async (id) => {
        try {
            const deleteTodos = await fetch(`http://localhost:8080/todos/${id}`, {
                method: 'DELETE'
            });
        setTodos(todos.filter(todo => todo.todo_id !== id))
        console.log(deleteTodos);
        } 
        catch (error) {
            console.log(error.message);
        }

    }

    //get all todos
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:8080/todos')
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <Fragment>
            <h1>Todo List</h1>
            <table>
                <tr>
                    <th>Açıklama</th>
                    <th>Düzenle</th>
                    <th>Sil</th>
                </tr>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                            <EditTodo/>
                        </td>
                        <td>
                            <button onClick={() => 
                                deleteTodo(todo.todo_id)
                            }>Sil</button>
                        </td>
                    </tr>
                ))}


            </table>
        </Fragment>

    )
}
