import React, { useContext } from 'react'
import { MyContext } from './Context'

const Button = ({name}) => {
    const btnValue = useContext(MyContext)
  return (
    <div>
        {
            btnValue.arr.map((item, index)=>{
                return <button>{item}</button>
            })
        }
    </div>
  )
}

export default Button