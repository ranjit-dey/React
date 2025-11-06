import React from 'react'

const ColorSwitch = (props) => {
    return (
        <button
            className="border border-gray-900 px-5 py-1 bg-gray-300 rounded"
            onClick={props.changeColor}
        >
            Change Color
        </button>
    )
}

export default ColorSwitch
