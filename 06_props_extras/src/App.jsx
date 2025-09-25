import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'


const App = () => {
    const [count, setCount] = useState(0);
    function decreaseVal(){
        setCount(count-1)
    }
    function increaseVal(){
        setCount(count+1)
    }


    return (
        <div>
            <Card name="Ranjit Dey">
                <h1>Code with Ranjit</h1>
                <p>I am learning react</p>
                <p>I am a final year student</p>
            </Card>

            {/* attribute children will not work untill you remove the content inside the opening and closing tag */}

            <Card children="Hello everyone">
                Hey there everyone, Ranjit Here back again with another code
            </Card>

            <Card>
                <p>{count}</p>
                <Button btnText="Increase" btnHandler={increaseVal}/>
                <Button btnText="Dedcrease" btnHandler={decreaseVal}/>
            </Card>

        </div>
    )
}

export default App
