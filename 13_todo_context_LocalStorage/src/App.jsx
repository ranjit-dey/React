import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts'

const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    const [todoStatusText, setTodoStatusText] = useState('completed')

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((singleTodo) => (singleTodo.id === id ? todo : singleTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((singleTodo) => singleTodo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((singleTodo) =>
                singleTodo.id === id
                    ? { ...singleTodo, completed: !singleTodo.completed }
                    : singleTodo,
            ),
        )
    }

    const markallCompleted = () => {
        setTodos((prev) =>
            prev.map((singleTodo) => ({ ...singleTodo, completed: !singleTodo.completed })),
        )
        setTodoStatusText((prev) => (prev === 'completed' ? 'incomplete' : 'completed'))
    }

    const deleteAllTodo = () => {
        setTodos([])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}>
            <div className="bg-[#0d1623] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>

                    {todos.length !== 0 && (
                        <div className="w-full flex justify-between mt-10">
                            <button
                                onClick={deleteAllTodo}
                                className="bg-red-500 text-white py-2 px-4 rounded  hover:bg-red-700 transition-all duration-300 cursor-pointer"
                            >
                                Delete all todos
                            </button>
                            <button
                                onClick={markallCompleted}
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-300 cursor-pointer"
                            >
                                Mark all as {todoStatusText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
