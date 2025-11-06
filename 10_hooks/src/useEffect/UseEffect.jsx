import React, { useEffect, useState } from 'react'

function Toast({ message }) {
    return (
        <div className='absolute top-2 right-2 p-3 bg-green-500 border border-gray-400 rounded'>
            <span className='text-xl font-medium text-white'>{message}</span>
        </div>
    );
}

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        if (count > 0) {
            setToastMessage("Count changed");
            setTimeout(() => setToastMessage(""), 2000); // hide after 2 sec
        }
    }, [count]);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 relative">
            {/* Show toast if available */}
            {toastMessage && <Toast message={toastMessage} />}

            <div className="flex justify-center items-center flex-col gap-5 p-7 bg-gray-600 border border-gray-400 rounded-lg ">
                <h1 className='text-3xl font-bold text-gray-200'>I'm clicked {count} times.</h1>
                <button
                    className='cursor-pointer px-4 py-1 bg-amber-700 border border-gray-400 rounded'
                    onClick={() => setCount(count + 1)}
                >
                    Click me
                </button>
            </div>
        </div>
    );
}

export default UseEffect;
