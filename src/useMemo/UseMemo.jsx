import React, { useMemo, useState } from 'react'
import Child from './Child'
import { Table } from 'antd';


const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    const columns = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age' },
        { title: 'Address', dataIndex: 'address' },
      ];
      const dataSource = Array.from({ length: 10000 }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      }));
    const searchedItems = dataSource.filter((item, index)=> item.name.includes(searchValue))

    const result = useMemo(()=>{
        return {
            a: count
        }
    }, [])
    // function expensiveCalculation(){
    //     let sum = 0
    //     for(var i = 0; i < 100000000; i++){
    //         sum += i
    //     }
    //     return sum
    // }

    // const res = useMemo(()=>{
    //     console.log("calling")
    //     return expensiveCalculation()
    // }, [])
    // console.log(res) //
    const handleClick = () => setValue(value + 1)
    //0x100 ->new ref
  return (
    <div>
        <h1>Counter : {count} </h1>
        <button onClick={()=> setCount(count + 1)}>Click</button>
        <Child value = {value} handleClick = {handleClick}/>
        <input type='text' onChange={(e) => setSearchValue(e.target.value)} />
        <Table columns = {columns} dataSource = {searchedItems}/>
    </div>
  )
}

export default UseMemo;