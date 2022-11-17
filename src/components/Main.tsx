import { useState } from 'react'
import {Item} from './TodoItem'

// Redoundancy with state declaration
const itemsList: Item[] = [];

import TodoItem from './TodoItem'

const Main = () => {
  const [itemsList, setItemsList] = useState([])
  return (
    <>
      <label htmlFor="todo">To-Do list</label>
      <input name="todo" type="text" required placeholder=''></input>

      {(itemsList) &&
        itemsList.map((item) => (
          console.log(`test : `, item)
        ))}
    </>
  )
}

export default Main