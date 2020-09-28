import React from 'react'
import Numbers from './Numbers'
import Misc from './Misc'
import Operators from './Operators'

export default (props) => {
    const {data, setData} = props
    return (
    <div id="buttonArea">
        <div id="container">
            <Misc data={data} setData={setData} />
            <Numbers data={data} setData={setData} />
        </div>
        
        <Operators data={data} setData={setData} />
        
       
        {/* {arr.map((test, index) => (
        <button key={index} onClick={() => handleClick()} >Test</button>
    ))} */}
    </div>
    )
}