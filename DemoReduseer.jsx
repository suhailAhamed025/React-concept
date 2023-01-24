import React, { useReducer } from 'react'

const initialState=0
const reducer=(state , action)=>{
    switch(action){
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        case 'reset':
            return initialState;
        default :
            return state
    }
}

function DemoReduseer() {

    const [state, dispatch] = useReducer(reducer,initialState)


  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch('increament')}}>increament</button>
        <button onClick={()=>{dispatch('decreament')}}>decreament</button>
        <button onClick={()=>{dispatch('reset')}}>reset</button>
    </div>
  )
}

export default DemoReduseer