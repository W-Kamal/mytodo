// src/models/TodoList.ts

import { Todo } from "./TodoModel";

export interface ActionTodoList {
  addTodoToList: () => TodoList;
  removeTodoToList: () => TodoList;
}

export type TodoList = {
  todos: Todo[]
}