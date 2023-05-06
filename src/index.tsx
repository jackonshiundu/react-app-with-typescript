import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Todo } from './Model';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/* type Actions =
  | { type: 'Add'; payload: string }
  | { type: 'remove'; payload: number }
  | { type: 'done'; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'Add':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
      break;
    case 'remove':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
      break;

    default:
      break;
  }
};

const ReducerFunction = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return <div />;
}; */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
