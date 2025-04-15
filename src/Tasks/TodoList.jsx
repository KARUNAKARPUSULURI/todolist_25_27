import React from 'react';
import "../App.css"

const TodoList = () => {
    const [students, setStudents] = React.useState([])
    const [student, setStudent] = React.useState({
        username: "",
        email: "",
        gender: "",
        age: 0
    })
    const [isEditing, setIsEditing] = React.useState(null)
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        setStudents([...students, student])
        // setStudent({
        //     username: "",
        //     email: "",
        //     gender: "",
        //     age: 0
        // })
    }
    const handleEdit = (index) => {
        setIsEditing(index)
        setStudent(students[index])
    }

    const handleSave = (index) => {
        const updatedStudents = [...students] 
        console.log(updatedStudents)
        updatedStudents[index] = student 
        setStudents(updatedStudents)
        setIsEditing(null)
    }
    const handleCancel = () => {
        setIsEditing(null)
    }
    const handleDelete = (email) => {
        const deletedItems = students.filter(item => item.email !== email)
        setStudents(deletedItems)
    }
    const handleClick = (btn) => {
        console.log(btn)
    }
    console.log("student", student)

    return (
        <div>
            <h1>TodoList -Student Management</h1>
            <form onSubmit={handleAdd} autoComplete='on'>
                <input type='text' placeholder='enter name' name="username" onChange={handleChange} />
                <input type='email' placeholder='enter email' name='email' onChange={handleChange} />
                <select name="gender" id="gender" onChange={handleChange}>
                    <option value={""}>Select</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                </select>
                <input type='number' placeholder='enter age' name='age' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            {students.length > 0 && (
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.length > 0 && students.map((item, index) => (
                                <tr key={index}>
                                    {
                                        isEditing === index ? (
                                            <>
                                                <td>
                                                    <input type='text' name='username' value={student.username} onChange={handleChange} />
                                                </td>
                                                <td>
                                                    <input type='email' name='email' value={student.email} onChange={handleChange} />
                                                </td>
                                                <td>
                                                    <select name="gender" value={student.gender} id="gender" onChange={handleChange}>
                                                        <option value={""}>Select</option>
                                                        <option value={"male"}>Male</option>
                                                        <option value={"female"}>Female</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type='number' name='age' value={student.age} onChange={handleChange} />
                                                </td>
                                                <td>
                                                    <button onClick={()=> handleSave(index)}>Save</button>
                                                    <button onClick={handleCancel}>Cancel</button>
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
                                        )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}

            {
                [0,1,2,3,4,5,6,7,8,9,"+","-","/","%", "*"].map((btn, index)=>(
                    <div>
                        <button key={index} onClick={()=>handleClick(btn)}>{btn}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList