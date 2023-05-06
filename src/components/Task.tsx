import React, { useEffect, useRef, useState } from 'react';
import { tokenToString } from 'typescript';
import { Todo } from '../Model';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const Task: React.FC<Props> = ({ todos, setTodos, todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log('hello');
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  let inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)} className="todos__single">
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setEditTodo(e.target.value)}
          value={editTodo}
          className="todos_single_text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div className="task__operations">
        <span
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => handleDone(todo.id)}
        >
          {' '}
          Done
        </span>
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => {
            if (!todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          Edit
        </span>
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => handleDelete(todo.id)}
        >
          {' '}
          Delete
        </span>
      </div>
    </form>
  );
};

export default Task;
