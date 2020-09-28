import React from 'react'

export default (props) => {
    let arr = []
    
    arr.length = 3
    arr.fill(0)
    return (
        <div id="misc" >
           
            {arr.map((test, index) => (
        <button key={index} onClick={() => handleClick()} >Test</button>
    ))}
        </div>
    )
}