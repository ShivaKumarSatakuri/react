import React from 'react'

const SecondComp = (props) => {
    // This will pint properties to the console in the browser
    console.log(props)

    const { model, year, dealer, color } = props.myCar

    return (
        /*<div>{props.userName}</div>*/
        <div>
            <div>{model}</div>
            <div>{year}</div>
            <div>{dealer}</div>
            <div>{color}</div>
        </div>
    )
}

export default SecondComp