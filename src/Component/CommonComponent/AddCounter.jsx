import React from 'react'
import CounterBox from './CounterBox'

export default function AddCounter() {
  return (
    <div className='AddBtn'>
    <button className="handleAdd" onClick={<CounterBox/>}>Add Counter</button>
    </div>
  )
}
