import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null)

    const [copyBtnText, setCopyBtnText] = useState('Copy')

    function handleClick() {
        setCopyBtnText('Copied')

        setTimeout(() => {
            setCopyBtnText('Copy')
        }, 2000)
    }

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) str += '0123456789'
        if (charAllowed) str += '`~!@#$%^&*(){}[]'

        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * str.length)
            pass = pass + str.charAt(index)
        }

        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, length)
        window.navigator.clipboard.writeText(password)
    }, [password, length])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    return (
        <div className="w-full max-w-md bg-gray-800 shadow-md mx-auto rounded-lg px-4 py-4 my-8 text-center text-orange-500">
            <h1 className="text-white text-center mb-2">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3 text-gray-700 bg-gray-300"
                    placeholder="password"
                    ref={passwordRef}
                    readOnly
                />
                <button
                    onClick={() => {
                        copyPasswordToClipboard()
                        handleClick()
                    }}
                    className="outline-none bg-blue-700 px-2 text-white"
                >
                    {copyBtnText}
                </button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        id="length"
                        min={6}
                        max={20}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => {
                            setLength(Number(e.target.value))
                        }}
                    />
                    <label htmlFor="length">Length : {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumberAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="charInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="charInput">Special Character</label>
                </div>
            </div>
        </div>
    )
}
export default App
