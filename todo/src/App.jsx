import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoControls from './components/TodoControls'
function App() {
  const [todos, setTodos] = useState({})

  const initialTodo = 'Learn React'
  const [inputValue, setInputValue] = useState(initialTodo);
  const [nextUp, setNextUp] = useState(initialTodo);

  const addTodo = () => {
    setTodos({
      ...todos,
      [Date.now()]: inputValue
    })
  }

  const removeTodo = (key) => () => {
    const newTodos = { ...todos }
    delete newTodos[key]
    setTodos(newTodos)
  }

  const clearTodos = () => {
    setTodos({})
  }

  useEffect(() => {
    setNextUp(inputValue)
  }
    , [inputValue])


  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <h1 className='text-3xl font-bold animate-pulse'> Next Up: {nextUp}</h1>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoControls
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
        clearTodos={clearTodos}
      />
    </div>
  )
}

export default App
