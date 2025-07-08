import React from 'react'

const SecondComp = (props) => {
    // This will pint properties to the console in the browser
    console.log(props)
    return (
        <div>{props.userName}</div>
    )
}

export default SecondComp