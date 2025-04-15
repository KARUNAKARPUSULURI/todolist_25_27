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