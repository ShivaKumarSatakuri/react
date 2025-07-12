import React from 'react'

const FirstComp = (props) => {
    console.log(props)
    return (
        <div>{props.userName}
            <p className='elementPara'>Content from fist component</p>
        </div>
    )
}

export default FirstComp