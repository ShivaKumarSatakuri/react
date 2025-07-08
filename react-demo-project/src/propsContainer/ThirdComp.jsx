import React from 'react'

const ThirdComp = (props) => {
    console.log(props)
    return (
        <div>{props.userName}</div>
    )
}

export default ThirdComp