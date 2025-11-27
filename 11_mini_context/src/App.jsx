import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
    return (
        <UserContextProvider>
            <div className="h-screen bg-gray-800 text-gray-300 flex items-center justify-center flex-col gap-5">
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    )
}

export default App
