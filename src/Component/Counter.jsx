import React from 'react'
import AddCounter from './CommonComponent/AddCounter'
import CounterBox from './CommonComponent/CounterBox'
import SumCounter from './CommonComponent/SumCounter'


export default function Counter() {
  return (
    <>
    <div className='CounterMain'>
      <AddCounter onClick={<CounterBox/>}/>
      <SumCounter />
    </div>
      <CounterBox/>
    </>
  )
}
