import React from 'react'

import { useState } from 'react'

const StateMgmt = () => {
    const [city, setCity] = useState("Hyderabad")

    console.log(city)

    /*setCity("Mumbai")
    console.log(city)*/

    return (
        <div>
            StateMgmt
        </div>
    )
}

export default StateMgmt