HOOKS :-hooks are functions

State Management :-

this.state = {
    count : 0,
    name : ""
}

useState() ->

- state is used to store or hold values which can change over time
- whenever a state value changes automatically the entire component gets re-rendered
React - >

functional based components->
syntax
props
conditional rendering
custom components
HOOKS -> 7  -> useState(), useEffect(), useContext(), useref(), usereducer(), usememo(),usecallback()  
React-router-dom - 2
lazy loading -> 1
HOC -> memo() |React.memo()
pure components - 1

class | functional
statefull | stateless but it has additional features -> Hooks
we can perform side effects | Hooks
props -> A -> B ->  -> D -> E -> hooks
state management -> this.staet = {count : 0} --> hooks

 function dispatchSetState(fiber, queue, action) {
        var args = arguments;
        "function" === typeof args[3] && console.error(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
        );
        args = requestUpdateLane(fiber);
        dispatchSetStateInternal(fiber, queue, action, args);
        markStateUpdateScheduled(fiber, args);
      }
dispatchSetState()

handleIncrement(){
    this.setState((prevState)=> prevState + 1) //1
}
this.state = {
    count : 0
}
setState((prevstate)=>{prevstate + 1})

count -> 1
batching 


  const handleEdit = (index) => {
        setIsEditing(index)
        setStudent(students[index])
    }
    const handleSave = (index) => {
        const updatedStudents = [...students]
        updatedStudents[index] = student
        setStudents(updatedStudents)
        setIsEditing(null)
        setStudent({
            username: "",
            email: "",
            gender: "",
            age: 0
        })
    }

        {
                            students.length > 0 && students.map((item, index) => (
                                <tr key={index}>
                                    {isEditing === index ? (
                                        <>
                                            <td><input type='text' name='username' value={student.username} onChange={handleChange} /></td>
                                            <td>
                                                <input type='email' name='email' value={student.email} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <select name="gender" value={student.gender} onChange={handleChange}>
                                                    <option value={""}>Select</option>
                                                    <option value={"male"}>Male</option>
                                                    <option value={"female"}>Female</option>
                                                </select>
                                            </td>
                                            <td><input type="number" name="age" value={student.age} onChange={handleChange} /></td>
                                            <td>
                                                <button onClick={() => handleSave(index)}>Save</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <button onClick={() => handleEdit(index)}>Edit</button>
                                                <button onClick={() => handleDelete(item.email)}>Delete</button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))
                        }
Useeffect():- it is used for life cycle methods in functional based components, it is used to perform side effects(func call, data fetching, timer function, subscriptions, or manually changing the DOM) in fbc 

useEffect(arg1, arg2) -> error
useEffect(callback, deps) 
useEffect(()=>{}, deps) 
useEffect(function(){}, deps)
function getProducts(){}
useEffect(getProducts, []) 
import React, { useEffect, useState } from 'react';
function FetchPrpoducts(){
    const [data, setData] = useState([])
    async function getProducts(){
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
    }
    getData()
}


useMemo :- caching -> {a : 2} -> it is used for memoizing values, incase any state value changes then if you want to recompute, need to pass that particular state value in the deps
input -> iphone
[{},{},{}]

api calls -> 

`UseCallback :- it is used for memoizing functions, allowing you to avoid unnecessary re-creations of functions on re-renders, which can improve performance in certain scenarios.

here also, it will be used to reuse the same reference whenever the function called


1000 -> button


const child = React.memo(({handleClick})=>{
    return (
        <button onclick = {handleClick}></button>
    )
})

export default child

import Child from "./child.jsx"
Parent - >10 states
<Child handleClick = {handleClick}/>


useReducer :- it is used for managing complex state logic in React components, allowing for more structured state management compared to useState. It follows the reducer pattern, where the state is updated based on actions dispatched to the reducer function.

const []= useState() //data
const []= useState() //single
const []= useState() //count
const []= useState() //loading
const []= useState() //loading
const []= useState() //loading
const []= useState() //loading
const []= useState() //loading

form -> 

ationType = "withdraw"
const reducerFunction = (Z, actionType) => {
      switch(actypeType){
        case "increment" : 
        state = state - withdraw
        return state
        case "decrement" : 
        state = state + withdraw
        return state
        case "reset" : 
        state = state + withdraw
        return state
    }
}

useState() -> local, global

usereducer -> local state management

redux


usereducer -> actions -> increment, dispatch, -> increment -> reducer, count


const [state, dispatch] = useReducer(reducerFunction, initialState);
const [count, dispatch] = useReducer(reducerFunction, 0);

action -> handleClick -> dispatch({type : "decrement"}) -> reducer -> 
counter -> 0


UseContext Hook : - 
we can access props directly from its parent compnents without being pass into nested components, 

why ? 
to prevent prop drilling

props -> passing data from parent to child

parent -> (data) -> child  -> grandChild - {data}
token -> , themes, 
App -> {data}
        parent -> 
                child - >
                        grandChild -> 
                                   Table -> {data}


app.jsx -> arr -> child.jsx -> grandChild.jsx ->  button.jsx -> 
const hello = createContext()
arr = []
<hello.Provider value = {arr}>
<Child />
</hello.Provider>
useContext()

Context.jsx -> 
const myContext = createContext() //{Provider, Consumer}


App.jsx ->arr = []
                    child -> 
                                Button -> arr

<myContext.Provider value = {arr}>
<Child />
</myContext.Provider>

Button.jsx => 

const data = useContext(myContext)

return (
    {
        data.map
    }
)