import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

const App = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="min-h-screen bg-gray-700 text-gray-200 flex flex-col itemes-center px-6">
                <h1 className="mt-30 mb-10 text-4xl font-bold text-center">Counter App</h1>
                <div className="flex justify-between items-center w-60 mx-auto">
                    <button
                        className=" cursor-pointer p-3 border-2 border-white rounded-lg text-2xl"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                    <span className="text-3xl font-bold">{count}</span>
                    <button
                        className=" cursor-pointer p-3 border-2 border-white rounded-lg text-2xl"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
