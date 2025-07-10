import React from 'react'

import { useState, useEffect } from 'react'

const StateMgmt = () => {
    const [city, setCity] = useState("Hyderabad")

    //useEffect
    useEffect(() => {
        if (city === "Hyderabad") {
            setCity("Bangalore")
        } else {
            setCity("Goa")
        }
    }, [city])
    console.log(city)

    //testing setState function
    /*setCity("Mumbai")
    console.log(city)*/

    /* this logic is specific to useState
    if (city === "Hyderabad") {
        setCity("Bangalore")
    } else {
        setCity("Goa")
    }*/

    return (
        <div>
            {/*StateMgmt*/}
            <h1>I live in {city}</h1>
        </div>
    )
}

export default StateMgmt