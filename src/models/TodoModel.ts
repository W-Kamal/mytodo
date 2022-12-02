// src/models/Todo.ts

export interface TodoAction {
  createTodo: () => void;
  editTodo: () => void;
}

export type Todo = {
  id: string;
  label: string;
  created_at: string|Date;
  edited_at: string|Date;
  status: string;
  validated: boolean;
}