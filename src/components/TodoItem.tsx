export interface Item {
  id: string;
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


const handleEdit = () => { }
const handleRemove = () => { }

const TodoItem = () => {
  return (
    <div>
      <p>Test</p>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default TodoItem