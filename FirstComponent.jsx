import React,{useState} from 'react'
import HocComponent from './HocComponent'

function FirstComponent({ increament,value}) {
    // const [val, setVal] = useState(0)
    // let incrementOnclick=()=>{
    //     setVal(val+1)
    // }
  return (
    <div>
        <h1>Increament on click: {value}</h1>
        <button onClick={increament}>click</button>
    </div>
  )
}

export default HocComponent(FirstComponent,1)