import { FormEvent, Dispatch, SetStateAction } from "react"
import { nanoid } from 'nanoid'


export const handleAdd = (e: FormEvent<HTMLFormElement>):void => {
  e.preventDefault()
  const id = nanoid()
}
export const handleChange = (e: Dispatch<SetStateAction<string>>):void => {
  e
}
export const handleEdit = ():void => {
  /*e.preventDefault()
   ON SUBMIT : on ne modifit que le texte et on récupère une date de modif à parser en string
  const date = new Date()
  ...todo,
  label = e.target.label
  edited_at = toString(e.target.date)
  */
}
export const handleRemove = ():void => {
  // e.preventDefault()
  // for the todo with e.id delete todoItem from todoList
  // todoList.shift(findIndex(todo.id)) // Comment programmer un delete d'une row ?
}
export const handleValidate = ():void => {
  // e.preventDefault()
  // change CSS className
  // 
}