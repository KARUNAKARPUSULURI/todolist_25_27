import { useState } from "react"

function Child({ value, handleClick }) {
    //state -> 
    return (
        <>
            <h1>Child : {value}</h1>
            <button
                onClick={handleClick}
            >Child Click
            </button>
        </>
    )
}

export default Child