import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    // const [age, setAge] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    // const handleClickAge = () => {
    //     setAge(age + 1)
    // }
    useEffect(() => {
        // console.log("calling..")
        // handleClick()
        setInterval(()=>{
            setCount(count + 1)
        }, 1000) //0 -> clear -> 1 + 1 -> 2 -> 2 + 1 -> 3+1 ->
        return () => clearInterval(intervalId)
    }, [count])

    // useEffect(()=>{
    //     // setInterval()
    //     // handleClick()
    //     // onsnapshot()
    //     // fetch().then()
    //     return () => {}
    // }, [count])
    // console.log("count", us)
    // console.log("age", age)
    return (
        <div>
            <h1>UseEffect : {count}</h1>
            {/* <h1>UseEffect : {age}</h1> */}
            <button onClick={handleClick}>Click</button>
            {/* <button onClick={handleClickAge}>Click</button> */}
        </div>
    )
}

export default UseEffect