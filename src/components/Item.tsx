import { Dispatch, SetStateAction } from "react"
import { MdEditNote, MdDone, MdOutlineDelete } from "react-icons/md"
import { Todo } from '../models/TodoModel'
import { validateItem, editItem, removeItem } from "../services/services"

interface SetList {
  setTodoList: Dispatch<SetStateAction<string>>
}

const TodoItem = (props: Todo, setTodoList: SetList) => {
  return (
    <>
      {/* <input
        type="text"
        required
        value={props.label}
      // onChange={(e) => setTodo(e.target.value)}
      >
      </input>*/}
      <p>{props.label}</p>
      <input type="button" onClick={(e) => validateItem()}><MdDone /></input>
      <input type="button" onClick={(e) => editItem()}><MdEditNote /></input>
      <input type="button" onClick={(e) => removeItem()}><MdOutlineDelete /></input>
    </>
  )
}

export default TodoItem