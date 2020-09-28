import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import ButtonArea from './ButtonArea'

const Calculator = (props) => {
  const [data, setData] = useState(0)
  
  return (
      <div id='calculator'>
         Calculator
         <View data={data}/>
         <ButtonArea data={data} setData={setData} />
      </div>
  )
}



ReactDOM.render(
  <Calculator />,
  document.getElementById('app')
)