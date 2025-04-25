import React, { useState } from 'react'
import Counter from './Tasks/Counter'
import TodoList from './Tasks/TodoList'
import UseEffect from './UseEffect/UseEffect'
import FetchProduct from './UseEffect/FetchProduct'
import UseMemo from './useMemo/UseMemo'
import UseCallback from './UseCallback/UseCallback'
import UserReducer from './UseReducer/UserReducer'
import UseContext from './UseContext/UseContext'
import { MyContext, MyTheme } from './UseContext/Context'
import Hello from './hello'
import Theme from './UseContext/Theme'

const App = () => {
  console.log(MyContext)
  const [color, setColor] = useState("red")
  const toggleTheme = () => setColor("blue")
  const arr = ["name", "age", "gender"]
  let count = 1
  console.log(count)
  return (
    <div>
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <UseEffect /> */}
      {/* <FetchProduct /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UserReducer /> */}
      <MyTheme.Provider value={{ toggleTheme, color }}>
        <MyContext.Provider value={{ arr, count }}>
          <UseContext />
        </MyContext.Provider>
        <Theme />
      </MyTheme.Provider>
      <Hello />
    </div>
  )
}

export default App