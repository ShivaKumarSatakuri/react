import React from 'react'

const FirstComp = (props) => {
    console.log(props)
    return (
        <div>{props.userName}</div>
    )
}

export default FirstComp