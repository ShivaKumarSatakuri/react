import React from 'react'

import { useState } from 'react'

const StateMgmt = () => {
    const [city, setCity] = useState("Hyderabad")

    console.log(city)

    //testing setState function
    /*setCity("Mumbai")
    console.log(city)*/

    if (city === "Hyderabad") {
        setCity("Bangalore")
    } else {
        setCity("Goa")
    }

    return (
        <div>
            {/*StateMgmt*/}
            <h1>I live in {city}</h1>
        </div>
    )
}

export default StateMgmt