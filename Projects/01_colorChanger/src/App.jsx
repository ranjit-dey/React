import { useState } from 'react'
import ColorBtn from './ColorBtn.jsx'

function App() {
    const buttons = [
        { btnText: 'Red', btnBg: 'bg-red-600' },
        { btnText: 'Green', btnBg: 'bg-green-600' },
        { btnText: 'Blue', btnBg: 'bg-blue-600' },
        { btnText: 'Pink', btnBg: 'bg-pink-600' },
        { btnText: 'Gray', btnBg: 'bg-gray-600' },
        { btnText: 'Purple', btnBg: 'bg-purple-600' },
        { btnText: 'Cyan', btnBg: 'bg-cyan-600' },
        { btnText: 'Violet', btnBg: 'bg-violet-600' },
    ]

    // state for background color
    const [bgColor, setBgColor] = useState('bg-black')

    return (
        <div className={`min-h-screen ${bgColor} flex flex-col justify-between items-center p-6 transition-colors duration-500`}>
            <h1 className="text-white text-2xl font-bold mb-6">🎨 Background Changer</h1>

            <div className="max-w-[90%] bg-white rounded-lg p-4 shadow-md flex flex-wrap gap-3 justify-center">
                {buttons.map((btn, index) => (
                    <ColorBtn
                        key={index}
                        btnBg={btn.btnBg}
                        btnText={btn.btnText}
                        onClick={() => setBgColor(btn.btnBg)} // update bg color
                    />
                ))}
            </div>
        </div>
    )
}

export default App
