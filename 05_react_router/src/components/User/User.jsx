import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams();

    return (
        <div className="h-100 flex items-center justify-center">
            <div className="bg-orange-700 text-white py-10 px-40 rounded-2xl shadow-2xl">
                <h1 className="font-bold text-4xl">
                    User: <span className="py-1 px-4 bg-orange-400 rounded-full">{userId}</span>
                </h1>
            </div>
        </div>
    )
}

export default User
