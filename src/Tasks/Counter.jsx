import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0) //[initialstate, function]
    const [names, setNames] = React.useState(['John', 'Doe', 'Jane'])
    const [colors, setColors] = React.useState(['red', 'blue', 'green', "yellow", "orange", "purple"])
    const [formData, setFormData] = React.useState({
        name: '',
        password: ''
    })
    function handleIncre() {
        setCount(count + 1)
        names.push("hello")
    }
    function handleDecre() {
        setCount(count - 1)
    }
    function handleReset() {
        setCount(0)
    }
    // console.log({name : value}) // {name, password, gender, age, email}
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value }) //{ name : "karunakar"}
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div>
            <h1 style={{ color: `${colors[count]}` }}>Counter :{count} - {names[count]}</h1>
            <button onClick={handleIncre}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecre}>Decrement</button>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter name' name='name' onChange={handleChange} />
                <input type='password' placeholder='enter password' name='password' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Counter