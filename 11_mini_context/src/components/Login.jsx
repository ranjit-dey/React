import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className="border border-gray-400 rounded-2xl p-6 flex flex-col gap-5 w-80 mx-auto shadow-md">
            <h1 className="text-center text-3xl font-bold pb-2 border-b border-gray-300">Login</h1>

            <input
                type="text"
                className="p-3 border rounded-lg border-gray-400 focus:outline-none focus:border-green-500 focus:placeholder-transparent"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                className="p-3 border rounded-lg border-gray-400 focus:outline-none focus:border-green-500 focus:placeholder-transparent"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="py-3 bg-green-600 rounded-lg text-white cursor-pointer hover:bg-green-700 active:scale-95 transition-all duration-300"
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    )
}

export default Login
