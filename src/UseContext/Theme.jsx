import React, { useContext, useState } from 'react'
import { MyTheme } from './Context'

const Theme = () => {
    const {color, toggleTheme} = useContext(MyTheme)
    console.log(color)
    console.log(toggleTheme)
  return (
    <div>
        <button onClick={toggleTheme} style={{color: color}}>Click me</button>
    </div>
  )
}

export default Theme