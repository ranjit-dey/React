import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// without importing component , Here we creating the component

function MyApp() {
    return (
        <div>
            <h1>Without importing Component</h1>
            <p>I am in main.jsx file</p>
        </div>
    )
}

// Basic Element created
const reactElement = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        target: '_blank',
    },
    children: 'Click me to visit React',
}

const Elem = (
    <a href="https://react.dev" target="_blank">
        Click to see React
    </a>
)

// Creating a React Element official way
const reactElementOriginal = React.createElement(
    'a',
    { href: 'https://react.dev', target: '_blank' },
    'Click me to vist React',
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            {/* this will work */}
            {Elem}

            {/* this will not work see error in DevTools */}
            {/* {reactElement} */}

            {/* original way to create a react element */}
            {reactElementOriginal}

            <App />
            <MyApp />
        </>
    </StrictMode>,
)
