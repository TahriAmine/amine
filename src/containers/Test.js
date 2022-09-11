import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const data =  useSelector((state)=>state)
    console.log(data)
  return (
    <div></div>
  )
}

export default Test