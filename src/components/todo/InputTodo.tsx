import { useEffect } from 'react';
import './Todo.css';

import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import ItemButton from './ItemButton';

import Dropdown from './Dropdown';
import Spinner from '../base/Spinner';
import useFetchTodo from '../../hooks/useFetchTodo';

export type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const { ref, setFocus } = useFocus();
  const { isLoading, inputText, setInputText, handleChange, handleSubmit } =
    useFetchTodo(setTodos);
  useEffect(setFocus, [setFocus]);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-box">
          <input
            className="input-text"
            placeholder="Add new todo..."
            ref={ref}
            value={inputText}
            onChange={handleChange}
            disabled={isLoading}
          />
          {!isLoading ? <ItemButton mode="add" /> : <Spinner />}
        </div>
      </form>
      <Dropdown
        keyword={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
    </>
  );
};

export default InputTodo;
