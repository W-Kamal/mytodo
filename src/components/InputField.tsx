import React, { StrictMode, useState, MouseEventHandler, FormEvent, Dispatch, SetStateAction } from "react";
import { MdLoop, MdAdd } from "react-icons/md"


export interface Item {
  id: number;
  label: string;
  status: Status;
  created_at: Date;
  validated: boolean;
}
enum Status {
  pending = 'pending',
  validate = 'validate',
  cancelled = 'cancelled',
}


export interface Props {
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
}
const handleEdit = () => { }
const handleRemove = () => { }


// Learn REACT form !!!!
// const handleChange = (e: Dispatch<SetStateAction<string>>) => {}


const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // if (reg.test(data)) {
  //check and validate data structure (RegExp?)
  // }
}

const InputItem = ({ todo, setTodo }: Props): JSX.Element => {
  return (
    <form>
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