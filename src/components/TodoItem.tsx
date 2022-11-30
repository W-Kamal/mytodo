import { SetStateAction } from "react"
import { MdEditNote, MdDone, MdOutlineDelete } from "react-icons/md"
import { TodoProps } from "../App"
import { handleValidate, handleEdit, handleRemove } from "../utilities/utils"

interface SetList {
  setTodoList: React.Dispatch<SetStateAction<string>>
}

const TodoItem = (props: TodoProps, setTodoList: SetList) => {
  return (
    <li key={props.id}>
      <input
        type="text"
        required
        value={props.label}
      // onChange={(e) => setTodo(e.target.value)}
      >
        {props.label}
      </input>
      <input type="button" onClick={(e) => handleValidate()}><MdDone /></input>
      <input type="button" onClick={(e) => handleEdit()}><MdEditNote /></input>
      <input type="button" onClick={(e) => handleRemove()}><MdOutlineDelete /></input>
    </li>
  )
}

export default TodoItem