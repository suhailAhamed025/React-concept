import React from 'react'
import "./input.css"
function FormInput(props) {
  return (
    <div className='formInput'>
      
        <input placeholder={props.placeholder} />

    </div>
  )
}

export default FormInput