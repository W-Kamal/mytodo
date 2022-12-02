import './App.css'
import { StrictMode, useState, FC, FormEvent } from 'react'

import todosList from "./assets/data.js" // json : tableau d'objets contenant x items
import { Todo } from './models/TodoModel'
// import { createItem } from "./services/services"

import InputField from './components/InputField'
import TodoItem from './components/Item'
import { nanoid } from 'nanoid'


/** TODO List
 * Requirements : manipulate items / Type checking TS
 * Features Required : add item / edit item / remove item / validate item / fetch items list / data persistance
 * Global state ?
 * Persistance ?
 * Zustand/Recoil/Redux OR useContext()+useReducer()
 * Components : item as input field with checkbox to validate
*/


const App: FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<Todo[]>([])
  console.log(`todo : `, todo)

  const createItem = (e: FormEvent) => {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      setTodoList([...todoList, { id: nanoid(4), label: todo, created_at: new Date(), edited_at: "", status: "pending", validated: false }])
      setTodo("")
    }
  }
  console.log(`todo liste : `, todoList)
  return (
    <StrictMode>
      <div className="App">
        <h1>ToDo List</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={createItem} />

        <ul>
          {/* {(todoList) &&
            todoList.map((item) => (
              <li key={item.id}>
                <TodoItem props={item} setTodo={setTodoList}/>
              </li>

            ))} */}
        </ul>
      </div>
    </StrictMode>
  )
}

export default App
