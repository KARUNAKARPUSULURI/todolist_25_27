import React, { useContext } from 'react'
import Button from './Button'
import { MyContext, MyTheme } from './Context'

const UseContext = () => {
  console.log(useContext(MyTheme))
  return (
    <div>
        <Button name = "karunakar"/>
    </div>
  )
}

export default UseContext