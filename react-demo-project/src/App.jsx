import React from 'react'
import './App.css'
import FirstComp from './propsContainer/FirstComp'
import SecondComp from './propsContainer/SecondComp'
import ThirdComp from './propsContainer/ThirdComp'
import FourthComp from './propsContainer/FourthComp'
import StateMgmt from './StateMgmt'

import { useState } from 'react'

/*function App() {

    let a = "Apples"
    let b = "Bananas"

    const user = {
        name: "Shubankar",
        city: "Hyderabad",
        area: "Ameerpet"
    }

    const myCar = {
        model: "Maruti",
        year: 2022,
        dealer: "Nixon",
        color: "red"
    }

    return (
        *//*<div>
    <h1>Javascript XML</h1>
</div>*//*

*//*<section>
    <h1>I like {a} & {b}</h1>
</section>*//*

*//*<div className="firstElement">
    <p className="elementPara">Created first element</p>

    {*//*Note: Images in img tag can either be in jpg or png format>*//*}

{*//*Added image from external source>*//*}
                            <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg" />
                    
                            {*//*Added image locally>*//*}
<img className='localImage' src="images/image.jpg" alt="Image not found" />
</div>*//*


        *//*< div className='' >
    <FirstComp userName={user.name} />
    <SecondComp userName="Satish" />
    <ThirdComp userName="Yeshwanth" />
    <FourthComp userName="Santosh" />
</div>*//*

<div className="container">
    <SecondComp myCar={myCar} />
    <StateMgmt/>
</div>
)
}*/

const App = () => {

    const [sampleCondition, setSampleCondition] = useState(true)

    //sampleCondition ? "This is true statement" : "This is false statement"

    return (
        <div>
            <h1>Welcome to React</h1>
            {sampleCondition ? "This is true statement" : "This is false statement"}

            {/*rendering components in terinary operator*/}
            {sampleCondition ? <FirstComp /> : "This is false statement"}
        </div>
    )
}

export default App