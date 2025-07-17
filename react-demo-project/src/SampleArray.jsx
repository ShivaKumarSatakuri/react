import React from 'react'

let sampleArray = ["String_value", "Another String value", 99, { username: "userValue" }]

const SampleArray = () => {
    return (
        <div>
            {sampleArray[0]}
        </div >
    )
}

export default SampleArray