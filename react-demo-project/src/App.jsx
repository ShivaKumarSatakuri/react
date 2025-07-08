import React from 'react'
import './App.css'

function App() {

    let a = "Apples"
    let b = "Bananas"

    return (
        /*<div>
            <h1>Javascript XML</h1>
        </div>*/

        /*<section>
            <h1>I like {a} & {b}</h1>
        </section>*/

        <div className="firstElement">
            <p className="elementPara">Created first element</p>

            {/*Note: Images in img tag can either be in jpg or png format>*/}

            {/*Added image from external source>*/}
            <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg" />

            {/*Added image locally>*/}
            <img src="images/image.jpg" alt="Image not found"/>
        </div>
    )
}

export default App