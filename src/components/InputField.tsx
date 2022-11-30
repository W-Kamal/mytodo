import React, { FormEvent, Dispatch, SetStateAction } from "react";
import { MdAdd, MdLoop } from "react-icons/md"
import { handleAdd } from "../utilities/utils"

export interface Props {
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
}

const InputItem = ({ todo, setTodo }: Props): JSX.Element => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        required
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"><MdAdd /></button>
      <button type="reset" onClick={(e) => setTodo("")}><MdLoop /></button>
    </form>
  )
}

export default InputItem