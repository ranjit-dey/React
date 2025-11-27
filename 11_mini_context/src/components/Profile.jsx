import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <div className='bg-red-300 px-5 py-2 rounded-lg border border-red-500 text-gray-700 font-bold'>Please Login</div>
    }

    return <div  className='bg-green-300 px-5 py-2 rounded-lg border border-green-500 text-gray-700 font-bold'>Welcome {user.username}</div>
}


export default Profile
