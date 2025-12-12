import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-800 flex flex-col items-center px-6">
                <h1 className='text-4xl font-bold text-gray-200 mt-20'>Todo App</h1>
                <AddTodo />
                <Todos />
            </div>
        </>
    )
}

export default App
