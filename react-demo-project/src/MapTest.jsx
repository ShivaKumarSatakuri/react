import React from 'react'


let players = [
    {
        cricket: "cricket value",
        tennis: "tennis value",
        chess: "chess value",
        hockey: "hockey value"
    }
]

const MapTest = () => {
    return (
        <div>
            {players.map((item) => {
                return (
                    <div>
                        <h3>Valuue for cricket is {players[0].cricket}</h3>
                        <h3>Valuue for tennis is {players[0].tennis}</h3>
                        <h3>Valuue for chess is {players[0].chess}</h3>
                        <h3>Valuue for hockey is {players[0].hockey}</h3>
                    </div>
                )
            })}
            {players[0].hockey} <br />
            {players[0].chess} <br />
            {players[0].cricket} <br />
        </div>
    )
}

export default MapTest