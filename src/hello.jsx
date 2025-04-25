import React, { useContext } from 'react'
import { MyContext } from './UseContext/Context'

const Hello = () => {
    console.log(useContext(MyContext))
  return (
    <div>Hello</div>
  )
}

export default Hello