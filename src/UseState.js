import React, { useEffect, useState } from 'react'
import './usestate.css'
function UseState() {

   const [count, setCount] = useState(0);
   const [type, setType] = useState('');





    function decreseCount()  {
       setCount(count - 1);
       setType('decrese')
    }
    function increseCount()  {
       setCount(count + 1);
       setType('increse')
    }

   
   
    

  return (
    <>
        <button className='btn' onClick={decreseCount}>-</button>
        <span className='number'>{count}</span>
        <span>{type}</span>
        <button className='btn' onClick={increseCount}>+</button>
    </>
  )
}

export default UseState
