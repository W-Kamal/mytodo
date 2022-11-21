import './App.css'
import React, { StrictMode, useState, MouseEventHandler, FormEvent, Dispatch, SetStateAction } from 'react'

import InputField, { Item } from './components/InputField'
import { todos } from "./assets/data.json" // todos est un json : tableau d'objet contenant x items

/** TODO List
 * Requirements : manipulate items / Type checking TS
 * Features Required : add item / edit item / remove item / validate item / fetch items list / data persistance
 * Global state ?
 * Persistance ?
 * Zustand/Recoil/Redux OR useContext()+useReducer()
 * Components : item as input field with checkbox to validate
*/




// NEED TYPING
// const CustomMsg = () => {return};

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  console.log(`todo : `, todo)
  return (
    <StrictMode>
      <div className="App">
        <h1>ToDo List</h1>
        <InputField todo={todo} setTodo={setTodo} />

        <ul>
          {/* {(todos) &&
          todos.map((item) => (
            // <TodoItem props={item}/>
            <p>{item.label}</p>
          ))} */}
        </ul>

      </div>
    </StrictMode>
  )
}

export default App
