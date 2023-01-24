import React,  { useState } from 'react'


let HocComponent=(Component,val)=> {


function HocComponent1() {
    const [value, setVal] = useState(0)
    let increament=()=>{
        setVal(value + val);
 
    }
    return <Component value={value} increament={increament}/>



}
return HocComponent1

}

export default HocComponent


