import { createContext, useState, useCallback, useEffect } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState({});
  const [inputValue, setInputValue] = useState('Learn React');
  const [nextUp, setNextUp] = useState('Learn React');

  const addTodo = useCallback(() => {
    setTodos(prevTodos => ({
      ...prevTodos,
      [Date.now()]: inputValue
    }));
  }, [inputValue]);

  const removeTodo = useCallback((key) => () => {
    setTodos(prevTodos => {
      const newTodos = { ...prevTodos };
      delete newTodos[key];
      return newTodos;
    });
  }, []); 

  const clearTodos = useCallback(() => {
    setTodos({});
  }, []);

  useEffect(() => {
    setNextUp(inputValue);
  }, [inputValue]);

  return (
    <TodosContext.Provider value={{ todos, inputValue, setInputValue, addTodo, removeTodo, clearTodos, nextUp }}>
      {children}
    </TodosContext.Provider>
  );
};
