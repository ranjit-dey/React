import React, { useState } from 'react'
import ColorSwitch from './components/ColorSwitch'

const App = () => {
    const [clicks, setClicks] = useState(0)
    const [bgColor, setBgColor] = useState('white')

    function handleClick() {
        setClicks(clicks + 1)
    }

    function generateRandomColor() {
        const r = Math.round(Math.random() * 255)
        const g = Math.round(Math.random() * 255)
        const b = Math.round(Math.random() * 255)
        return `rgb(${r},${g},${b})`
    }

    function changeColor(e) {
        e.stopPropagation()
        setBgColor(generateRandomColor())
    }

    return (
        <div className="h-screen w-screen bg-gray-700 flex items-center justify-center select-none">
            <div
                className={`h-35 w-110 rounded p-5 flex flex-col justify-between items-start`}
                style={{ backgroundColor: bgColor }}
                onClick={handleClick}
            >
                <ColorSwitch changeColor={changeColor} />
                <h1 className="font-bold text-2xl text-gray-600">Total Clicks : {clicks}</h1>
            </div>
        </div>
    )
}

export default App
