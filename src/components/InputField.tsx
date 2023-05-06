import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="input"
    >
      <input
        className="input__box"
        type="input"
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Enter a Task..."
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
