import { totalmem } from 'os';
import React from 'react';
import { Todo } from '../Model';
import Task from './Task';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <Task todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map((todo) => (
          <Task todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </div>
    </div>
    /* <div className="todos_container">
      {todos.map((todo) => (
        <Task todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </div> */
  );
};

export default TodoList;
