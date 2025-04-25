import React, { useCallback, useState } from 'react'

const arr = [] //[function : handleClick], [function: handleClick]
const UseCallback = () => {
    // const items = Array.from({ length: 1000 }, (_, index) => {
    //     return (
    //         <>
    //             <button onClick={handleClick}>Click me {index}</button>
    //         </>
    //     )
    // })
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        console.log("calling?")
        setCount(count + 1)
    }, [])
    arr.push(handleClick)
    console.log(arr)
    console.log(arr[0] == arr[1])
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseCallback