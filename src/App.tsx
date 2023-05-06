import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './Model';
import { DEFAULT_ECDH_CURVE } from 'tls';
import TodoList from './components/TodoList';

/* let name: string;
//| sign is a union and what it does is it lets you asign more than one variable to a type
let age: number | string;
let isBoolean: boolean;
let hobbies: string[];
//a tupul is an array that contains more than one variable
let role: [number, string];
// type-aliases
type Person = {
  name: string;
  //the ? sign indicates that the age part is optional
  age?: number;
};
role = [5, 'jackon'];
let personLPerson = {
  name: 'jackon',
};
let people: Person[];
//function types
let printName: (name: string) => void;
//if we dont know if its going to return or not | void return undefined and never returns nothing
let printAge: (name: string) => never;

//unknown types
//we use unknown if we dont know what type is going to be.
let mother: unknown;

// interface-aliases
interface Kid {
  name: string;
  age: number;
  parent: string;
}
//diffrence betweeen interface and type
type X = {
  a: string;
  b: number;
};
//this is how a type can be extended
type Y = X & {
  c: string;
  d: number;
};
let y: Y = {
  a: 'shiundu',
  b: 34,
  c: 'jackon',
  d: 24,
};
//this is how a interface can be extended

interface Guy extends Kid {
  profession: string;
}
//to extend an type from an interface
type M = Kid & {
  DOB: Date;
};
//to extend an interface from a type
interface N extends Kid {
  DOB: Date;
} */
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, SetTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      SetTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={SetTodos} />
    </div>
  );
};

export default App;
