import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number <= 0 ? 0 : number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ClickEvent