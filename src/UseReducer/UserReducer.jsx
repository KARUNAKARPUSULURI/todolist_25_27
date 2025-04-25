import React, { useReducer } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const reducerFunc = (state, actionType) => {
    switch (actionType) {
        case "increment":
            state += 1
            return state;
        case "decrement":
            state -= 1
            return state;
        case "reset":
            state = 0
            return state;
        default:
            return state
    }
}


const UserReducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, 0)

    const handleIncrement = () => {
        dispatch("increment")
    }
    const handleDecrement = () => {
        dispatch("decrement")
    }
    const handleReset = () => {
        dispatch("reset")
    }
    const obj = {
        name: null
    }
    return (
        <div>
            {/* <p>{obj.name || <Skeleton />}</p> */}
            <SkeletonTheme baseColor="red" highlightColor="black">
                <p>
                    <Skeleton width={"100px"} height={"100px"} count={3} />
                </p>
            </SkeletonTheme>
            <h1>Counter : {state}</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
                <input type='file' />
                <img loading='lazy' />
                <details>
                    <summary>HTML CSS</summary>
                </details>
                <details>
                    <summary>JS</summary>
                </details>
                <details>
                    <summary>React</summary>
                </details>
                <details>
                    <summary>HTML CSS</summary>
                </details>
            </div>
        </div>
    )
}

export default UserReducer