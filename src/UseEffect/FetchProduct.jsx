import React, { useEffect, useState } from 'react'

const arr = [] //function(){} -> #300, function(){} ->#400
const FetchProduct = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(19) //undefined + 1 -> NaN
    function handleNext() {
        if (count < 20) {
            setCount(count + 1)
        }
    }
    arr.push(handleNext)
    console.log(arr[0] == arr[1])
    function handlePrev() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    let sum = 0;
    for(let i = 0; i<= 1000000000; i++){
        sum += i
    }
    console.log(sum)
    function getProducts() {
        return fetch(`https://fakestoreapi.com/products/${count}`)
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        // getProducts()
        fetch(`https://fakestoreapi.com/products/${count}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [count])
    return (
        <div>
            <h1>Product : {sum}</h1>
            {/* {getProducts().map()} */}
            <div>
                {data.title}
                <p>{data.description}</p>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default FetchProduct