import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Managing state with synchronization</h1>
            <div>I am main container and my input also : {name}</div>
            <Card title="Card 1" name={name} setName={setName}/>
            <Card title="Card 2" name={name} setName={setName}/>
        </div>
    )
}

export default App
