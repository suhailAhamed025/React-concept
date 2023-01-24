import React,{useState} from 'react'

function SecondComponent() {
    const [val, setVal] = useState(0)
    let incrementOnMouseOver=()=>{
        setVal(val+1)
    }
  return (
    <div>
          <h1>Increament on click {val}</h1>
        <button onMouseOver={incrementOnMouseOver}>click</button>
    </div>
  )
}

export default SecondComponent