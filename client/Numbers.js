import React from 'react'

export default (props) => {
    let arr = [9,8,7,6,5,4,3,2,1,'C',0]

    return (
        <div id="numbers" >
            
             {arr.map((val, index) => (
        
        <button key={index} onClick={() => handleClick()} >{val}</button>
    ))}
        <button>.</button>
        </div>
    )
}