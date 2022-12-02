// src/services/Services.ts

import { Dispatch, FormEvent, SetStateAction } from "react"
import { nanoid } from 'nanoid'


export const createItem = (e:FormEvent) => {
  e.preventDefault();
  
// export const createItem = (e:React.MouseEvent, collection :string, item:EventTarget):void => {

}
export const handleChange = (e: Dispatch<SetStateAction<string>>):void => {
  // ici je change le state de l'input avant de submit
  e
}
export const editItem = ():void => {
  /*e.preventDefault()
  OnSubmit : on ne modifit que le texte et on récupère une date de modif à parser en string
  const date = new Date()
  ...todo,
  label = e.target.label
  // Comment transformer la date dans un format lisible ?
  // Ou dois-je formater la date à chaque affichage ?
  edited_at = toString(e.target.date)
  */
}
export const removeItem = ():void => {
  // e.preventDefault()
  // for the todo with e.id delete todoItem from todoList
  // todoList.shift(findIndex(todo.id)) // Comment programmer un delete d'une row ?
}
export const validateItem = ():void => {
  // e.preventDefault()
  // change CSS className
  // 
}