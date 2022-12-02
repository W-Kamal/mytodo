import { SetStateAction, Dispatch, FC, FormEvent } from "react";
import { MdAdd, MdLoop } from "react-icons/md";

import { createItem } from "../services/services";
import { TodoAction } from '../models/TodoModel';

export interface Props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleAdd: (e:FormEvent) => void;
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }): JSX.Element => {
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

export default InputField