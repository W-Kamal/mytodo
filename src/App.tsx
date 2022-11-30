import './App.css'
import React, { StrictMode, useState } from 'react'
import InputField from './components/InputField'
import todos from "./assets/data.js" // todos est un json : tableau d'objet contenant x items
import TodoItem from './components/TodoItem'


/** TODO List
 * Requirements : manipulate items / Type checking TS
 * Features Required : add item / edit item / remove item / validate item / fetch items list / data persistance
 * Global state ?
 * Persistance ?
 * Zustand/Recoil/Redux OR useContext()+useReducer()
 * Components : item as input field with checkbox to validate
*/

export type TodoProps = {
  id: number;
  label: string;
  created_at: string;
  edited_at: string;
  status: string;
  validated: boolean;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<TodoProps[]>(todos)
  console.log(`todo : `, todo)
  console.log(`todos : `, todos)

  return (
    <StrictMode>
      <div className="App">
        <h1>ToDo List</h1>
        <InputField todo={todo} setTodo={setTodo} />

        <ul>
          {(todoList) &&
            todoList.map((todo) => (
              <TodoItem props={todo} setTodo={setTodoList}/>

            ))}
        </ul>

      </div>
    </StrictMode>
  )
}

export default App
